import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// import SelectField from 'material-ui/SelectField';

import { grey600 } from 'material-ui/styles/colors';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Save from 'material-ui/svg-icons/content/save';
import PlayList from 'material-ui/svg-icons/av/playlist-play';
import Check from 'material-ui/svg-icons/navigation/check';
import Person from 'material-ui/svg-icons/social/person';
import History from 'material-ui/svg-icons/action/history';
import List from 'material-ui/svg-icons/action/list';

import * as MenuActions from 'root/actions/menu';
import * as RouteActions from 'root/actions/route';

import Divider from 'root/components/Divider';
import FuncGroup from 'root/components/english/FuncGroup';
import FuncMenu from 'root/components/FuncMenu';
import AudioPlayer from 'root/components/AudioPlayer';
import { VERSION } from 'root/constant/Const';

const styles = {
  style: {
    width: '24px',
    height: '24px',
    padding: '0px',
    margin: '0px 4px',
  },
  container: {
    height: '36px',
    display: 'flex',
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
  },
  subContainer: {
    height: '24px',
    fontSize: '14px',
    //display: 'flex',
    backgroundColor: '#D8D8D8',
    //alignItems: 'center',
  },
  selectedMenuItemStyle: {
    minWidth: '120px',
  },
  menuItemStyle: {
    lineHeight: '24px',
    minHeight: '24px',
    fontSize: '14px',
  },
  innerDivStyle: {
    paddingRight: '8px',
    paddingLeft: '36px',
    fontSize: '14px',
  },
  itemIconStyle: {
    top: '0px',
    left: '4px',
    margin: '0px',
  },
  sfStyle: {
    fontSize: '14px',
    width: '160px',
  }
};

class Menubar extends Component {

  constructor() {
    super();

    this.state = {
      open: false,
      showHistory: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleOnNext = this.handleOnNext.bind(this);
    this.handleCtgChange = this.handleCtgChange.bind(this);
    this.handleOnHistory = this.handleOnHistory.bind(this);
  }

  handleOpen() {
    this.props.actions.playlist();

    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOnSave() {
    const { wordType, allWords, currWords } = this.props;
    const words = wordType === 4 ? currWords : allWords;

    this.props.actions.save(words);
  }

  handleOnNext() {
    this.props.actions.next(
      this.props.currUser,
      this.props.wordType,
    );
  }

  handleCtgChange(e, o) {
    const selected = o.props.value;
    const newValues = this.props.ctgValues;
    const index = newValues.indexOf(selected);

    if (index === -1) {
      newValues.push(selected);
    } else {
      newValues.splice(index, 1);
    }

    this.props.actions.ctgChanged(newValues);
  }

  handleOnHistory() {
    this.setState({ showHistory: !this.state.showHistory });
  }

  menuItems(values) {
    return this.props.ctgNames.map((name) => (
      <MenuItem
        key={name}
        leftIcon={values && values.indexOf(name) > -1 
          ? <Check style={styles.itemIconStyle} /> 
          : null
        }
        value={name}
        primaryText={name}
        style={styles.menuItemStyle}
        innerDivStyle={styles.innerDivStyle}
      />
    ));
  }

  render() {
    const actions = [
      <FlatButton
        key={1}
        label="Close"
        primary
        onTouchTap={this.handleClose}
      />,
    ];

    const fillColor = grey600;

    const icon = this.props.visible ? <VisibilityOff color={fillColor} /> : <Visibility color={fillColor} />;
    const tooltip = this.props.visible ? '語彙非表示' : '語彙表示';

    const menuItems = this.props.users.map((user, idx) =>
      (
        <MenuItem
          key={idx}
          primaryText={user}
          style={styles.menuItemStyle}
          innerDivStyle={styles.innerDivStyle}
          leftIcon={this.props.checkedUser === idx ? <Check style={{ margin: '0px' }} /> : null}
          onTouchTap={() => { this.props.actions.userChanged(idx); }}
        />
      ),
    );

    const source = this.props.playlist.map((item, idx) => <source key={idx} src={item.source} type={item.type} />);

    return (
      <div>
        <div style={styles.container}>
          <FuncMenu actions={this.props.routeActions} />
          <Divider height="28px" width="2px" style={{ margin: '4px 4px' }} />
          <FuncGroup actions={this.props.actions} /> 
          <Divider height="28px" width="2px" style={{ margin: '4px 4px' }} />
          <IconButton
            style={styles.style}
            tooltip="前へ"
            tooltipPosition="bottom-center"
            onTouchTap={this.props.actions.prev}
          >
            <ArrowBack color={fillColor} />
          </IconButton>
          <IconButton
            style={styles.style}
            tooltip="次へ"
            tooltipPosition="bottom-center"
            onTouchTap={this.handleOnNext}
          >
            <ArrowForward color={fillColor} />
          </IconButton>
          <IconButton
            style={styles.style}
            tooltip={tooltip}
            tooltipPosition="bottom-center"
            onTouchTap={this.props.actions.switchs}
          >
            {icon}
          </IconButton>
          <IconButton
            style={styles.style}
            tooltip="保存"
            tooltipPosition="bottom-center"
            onTouchTap={this.handleOnSave}
          >
            <Save color={fillColor} />
          </IconButton>
          <IconButton
            style={styles.style}
            tooltip="PlayList"
            tooltipPosition="bottom-center"
            onTouchTap={this.handleOpen}
          >
            <PlayList color={fillColor} />
          </IconButton>
          <IconButton
            style={styles.style}
            tooltip="履歴"
            tooltipPosition="bottom-center"
            onTouchTap={this.handleOnHistory}
          >
            <History color={fillColor} />
          </IconButton>
          <Divider height="28px" width="2px" style={{ margin: '4px 4px' }} />
          <IconMenu
            iconButtonElement={<IconButton><Person color={fillColor} /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            selectedMenuItemStyle={styles.selectedMenuItemStyle}
            listStyle={styles.selectedMenuItemStyle}
          >
            {menuItems}
          </IconMenu>
          <IconMenu
            multiple
            iconButtonElement={<IconButton><List color={fillColor} /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            selectedMenuItemStyle={styles.selectedMenuItemStyle}
            listStyle={styles.selectedMenuItemStyle}
            value={this.props.ctgValues}
            onItemTouchTap={this.handleCtgChange}
          >
            {this.menuItems(this.props.ctgValues)}
          </IconMenu>
          <span
            style={{
              position: 'absolute',
              right: '16px',
              fontSize: '12px',
            }}
          >
            {VERSION}
          </span>
          <Dialog
            title="Today's playlist"
            actions={actions}
            modal
            open={this.state.open}
          >
            <RaisedButton primary label="開始" onTouchTap={() => { this.audioPlayer.start(); }} />
            <AudioPlayer
              ref={(audioPlayer) => { this.audioPlayer = audioPlayer; }}
              playlist={this.props.playlist}
            />
          </Dialog>
        </div>
        <div style={Object.assign({}, styles.subContainer, { display: this.state.showHistory ? 'inherit' : 'none' } )}>
          <span style={{ marginLeft: '8px'}}>
            新単語：{this.props.statistic.newCount === undefined ? 0 : this.props.statistic.newCount}　
            復習：{this.props.statistic.reviewCount === undefined ? 0 : this.props.statistic.reviewCount}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.app.visible,
  users: state.app.users,
  currUser: state.app.currUser,
  checkedUser: state.app.checkedUser,
  wordType: state.app.wordType,
  fileData: state.word.fileData,
  allWords: state.word.words,
  currWords: state.word.currPage,
  uploadStatus: state.app.uploadStatus,
  playlist: state.word.playlist,
  statistic: state.word.statistic,
  ctgNames: state.app.ctgNames,
  ctgValues: state.app.ctgValues,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MenuActions, dispatch),
  routeActions: bindActionCreators(RouteActions, dispatch),
});

Menubar.defaultProps = {
  users: [],
  playlist: [],
  ctgNames: [],
};

Menubar.props = {
  actions: PropTypes.func,
  routeActions: PropTypes.func,
  visible: PropTypes.bool,
  currUser: PropTypes.string,
  users: PropTypes.string,
  checkedUser: PropTypes.number,
  wordType: PropTypes.string,
  fileData: PropTypes.string,
  allWords: PropTypes.arrayOf(PropTypes.object),
  currWords: PropTypes.arrayOf(PropTypes.object),
  uploadStatus: PropTypes.string,
  playlist: PropTypes.arrayOf(PropTypes.object),
  statistic: PropTypes.object,
  ctgNames: PropTypes.arrayOf(PropTypes.string),
  ctgValues: PropTypes.arrayOf(PropTypes.string),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menubar);


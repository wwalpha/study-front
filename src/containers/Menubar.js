import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import Download from 'material-ui/svg-icons/file/file-download';
import Upload from 'material-ui/svg-icons/file/file-upload';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import School from 'material-ui/svg-icons/social/school';
import LooksOne from 'material-ui/svg-icons/image/looks-one';
import LooksTwo from 'material-ui/svg-icons/image/looks-two';
import Looks3 from 'material-ui/svg-icons/image/looks-3';
import Save from 'material-ui/svg-icons/content/save';
import Settings from 'material-ui/svg-icons/action/settings';
import PlayList from 'material-ui/svg-icons/av/playlist-play';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {blue500, red500, grey600} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Divider from '../components/Divider';
import DLButton from '../components/DLButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class Menubar extends Component {

  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const styles = {
      style: {
        width: '24px',
        height: '24px',
        // padding: '0px 4px 0px 4px',
        padding: '0px',
        margin: '0px 4px',
      },
      container: {
        height: '36px',
        display: 'flex',
        backgroundColor: '#D8D8D8',
        alignItems: 'center',
      },
      radioButton: {
        rippleColor: 'red',
        width: '24px',
        margin: '0px 2px',
      },
      iconStyle: {
        width: 'inherit',
      },
      radioButtonGroup: {
        display: 'flex',
        width: 'auto',
        marginLeft: '12px',
      },
      
    }

    const fillColor = grey600;

    const icon = this.props.visible ? <VisibilityOff color={fillColor} /> : <Visibility color={fillColor} />;
    const tooltip = this.props.visible ? '語彙非表示' : '語彙表示';
    const color1 = this.props.type === '1' ? greenA200 : fillColor;
    const color2 = this.props.type === '2' ? greenA200 : fillColor;
    const color3 = this.props.type === '3' ? greenA200 : fillColor;

    return (
      <div style={styles.container}>
        <RadioButtonGroup
          name="wordtype"
          style={styles.radioButtonGroup}
          defaultSelected={this.props.wordType}
          onChange={(e, value) => {
            this.props.actions.switchType(value);
          }}
        >
          <RadioButton
            value="1"
            style={styles.radioButton}
            iconStyle={styles.iconStyle}
            checkedIcon={<LooksOne />}
            uncheckedIcon={<LooksOne />}
          />
          <RadioButton
            value="2"
            style={styles.radioButton}
            iconStyle={styles.iconStyle}
            checkedIcon={<LooksTwo />}
            uncheckedIcon={<LooksTwo />}
          />
          <RadioButton
            value="3"
            style={styles.radioButton}
            iconStyle={styles.iconStyle}
            checkedIcon={<Looks3 />}
            uncheckedIcon={<Looks3 />}
          />
        </RadioButtonGroup>
        <Divider height="32px" width="2px" style={{ margin: '2px 4px'}} />
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
          onTouchTap={ e => {
            this.props.actions.next(
              this.props.currUser,
              this.props.wordType,
            );
          }}
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
          onTouchTap={e => {
            this.props.actions.save(this.props.words);
          }}
        >
          <Save color={fillColor} />
        </IconButton>
        <DLButton
          style={styles.style}
          fileName="words.txt"
          fileData={this.props.fileData}
          onTouchTap={this.props.actions.download}
          color={fillColor}
        />
        <IconButton style={styles.style} tooltip="アップロード" tooltipPosition="bottom-center">
          <Upload color={fillColor} />
        </IconButton>
        <IconButton
          style={styles.style}
          tooltip="設定"
          tooltipPosition="bottom-center"
        >
          <Settings color={fillColor} />
        </IconButton>
        <IconButton
          style={styles.style}
          tooltip="PlayList"
          tooltipPosition="bottom-center"
          onTouchTap={this.handleOpen}
        >
          <PlayList color={fillColor} />
        </IconButton>
        <Dialog
          title="Today's playlist"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          xxxx
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    visible: state.app.visible,
    currUser: state.app.currUser,
    wordType: state.app.wordType,
    fileData: state.word.fileData,
    words: state.word.words,
    // open: state.app.open,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch)
})

Menubar.props = {
  actions: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  currUser: PropTypes.string,
  wordType: PropTypes.string,
  fileData: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.object),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menubar);
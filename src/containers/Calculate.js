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
import SelectField from 'material-ui/SelectField';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { grey600 } from 'material-ui/styles/colors';

import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import Upload from 'material-ui/svg-icons/file/file-upload';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import LooksOne from 'material-ui/svg-icons/image/looks-one';
import LooksTwo from 'material-ui/svg-icons/image/looks-two';
import Looks3 from 'material-ui/svg-icons/image/looks-3';
import Looks4 from 'material-ui/svg-icons/image/looks-4';
import Save from 'material-ui/svg-icons/content/save';
import Settings from 'material-ui/svg-icons/action/settings';
import PlayList from 'material-ui/svg-icons/av/playlist-play';
import Check from 'material-ui/svg-icons/navigation/check';
import Person from 'material-ui/svg-icons/social/person';

import * as MenuActions from '../actions/menu';
import Divider from '../components/Divider';
import DLButton from '../components/DLButton';
import UploadButton from '../components/UploadButton';
import AudioPlayer from '../components/AudioPlayer';
import { VERSION } from '../constant/Const';

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

class Calculate extends Component {

  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleOnNext = this.handleOnNext.bind(this);
    this.handleCtgChange = this.handleCtgChange.bind(this);
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

  handleCtgChange(event, index, values) {
    this.props.actions.ctgChanged(values);
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
          <RadioButton
            value="4"
            style={styles.radioButton}
            iconStyle={styles.iconStyle}
            checkedIcon={<Looks4 />}
            uncheckedIcon={<Looks4 />}
          />
        </RadioButtonGroup>
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
        <DLButton
          style={styles.style}
          fileName="words.txt"
          fileData={this.props.fileData}
          onTouchTap={this.props.actions.download}
          color={fillColor}
        />
        <UploadButton
          style={styles.style}
          iconStyle={styles.style}
          tooltip="Upload"
          tooltipPosition="bottom-center"
          icon={<Upload color={fillColor} />}
          onUpload={this.props.actions.upload}
          uploadStatus={this.props.uploadStatus}
        />
        <IconButton
          style={styles.style}
          tooltip="PlayList"
          tooltipPosition="bottom-center"
          onTouchTap={this.handleOpen}
        >
          <PlayList color={fillColor} />
        </IconButton>
        <Divider height="28px" width="2px" style={{ margin: '4px 4px' }} />
        <UploadButton
          style={styles.style}
          iconStyle={styles.style}
          tooltip="Settings"
          tooltipPosition="bottom-center"
          icon={<Settings color={fillColor} />}
          onUpload={this.props.actions.updateSettings}
          uploadStatus={this.props.uploadStatus}
        />
        <IconMenu
          iconButtonElement={<IconButton><Person color={fillColor} /></IconButton>}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          selectedMenuItemStyle={styles.selectedMenuItemStyle}
          listStyle={styles.selectedMenuItemStyle}
        >
          {menuItems}
        </IconMenu>
        <SelectField
          multiple
          hintText="カテゴリー"
          style={styles.sfStyle}
          listStyle={{ padding: '8px 0px 8px 8px' }}
          value={this.props.ctgValues}
          onChange={this.handleCtgChange}
        >
          {this.menuItems(this.props.ctgValues)}
        </SelectField>
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
  ctgNames: state.app.ctgNames,
  ctgValues: state.app.ctgValues,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MenuActions, dispatch),
});

Calculate.defaultProps = {
  users: [],
  playlist: [],
  ctgNames: [],
};

Calculate.props = {
  actions: PropTypes.object.isRequired,
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
  ctgNames: PropTypes.arrayOf(PropTypes.string),
  ctgValues: PropTypes.arrayOf(PropTypes.string),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculate);


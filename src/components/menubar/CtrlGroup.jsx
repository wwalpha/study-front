import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowBack from 'material-ui-icons/ArrowBack';
import ArrowForward from 'material-ui-icons/ArrowForward';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Save from 'material-ui-icons/Save';
import PlaylistPlay from 'material-ui-icons/PlaylistPlay';
import { IconButton } from 'comp';

export default class CtrlGroup extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    disabled: PropTypes.bool,
    showVisible: PropTypes.func,
    back: PropTypes.func,
    next: PropTypes.func,
    save: PropTypes.func,
    play: PropTypes.func,
  }

  render() {
    const {
      visible, showVisible, disabled, back, next, save, play,
    } = this.props;

    return (
      <React.Fragment>
        <IconButton onClick={back} disabled={disabled}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={next} disabled={disabled}>
          <ArrowForward />
        </IconButton>
        <IconButton onClick={showVisible}>
          {(() => (visible ? <VisibilityOff /> : <Visibility />))()}
        </IconButton>
        <IconButton onClick={save}>
          <Save />
        </IconButton>
        <IconButton onClick={play}>
          <PlaylistPlay />
        </IconButton>
      </React.Fragment>
    );
  }
}

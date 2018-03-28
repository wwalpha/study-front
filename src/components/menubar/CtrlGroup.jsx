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
    actions: PropTypes.objectOf(PropTypes.func),
    visible: PropTypes.bool,
  }

  render() {
    const { actions, visible } = this.props;
    console.error(actions);
    return (
      <React.Fragment>
        <IconButton>
          <ArrowBack />
        </IconButton>
        <IconButton>
          <ArrowForward />
        </IconButton>
        <IconButton>
          {(() => (visible ? <VisibilityOff /> : <Visibility />))()}
        </IconButton>
        <IconButton>
          <Save />
        </IconButton>
        <IconButton>
          <PlaylistPlay />
        </IconButton>
      </React.Fragment>
    );
  }
}

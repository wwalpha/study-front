import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Save from 'material-ui-icons/Save';
import PlaylistPlay from 'material-ui-icons/PlaylistPlay';
import { IconButton } from 'ui/Button';

const styles = (theme) => {
  console.error(theme);

  return {
    rotate: {
      transform: 'rotate(180deg)',
    },
  };
};

class CtrlGroup extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
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
      classes, visible, showVisible, disabled, back, next, save, play,
    } = this.props;

    return (
      <React.Fragment>
        <IconButton onClick={back} disabled={disabled}>
          <PlayArrow className={classes.rotate} />
        </IconButton>
        <IconButton onClick={next} disabled={disabled}>
          <PlayArrow />
        </IconButton>
        <IconButton onClick={showVisible} disabled={disabled}>
          {(() => (visible ? <VisibilityOff /> : <Visibility />))()}
        </IconButton>
        <IconButton onClick={save} disabled={disabled}>
          <Save />
        </IconButton>
        <IconButton onClick={play} disabled={disabled}>
          <PlaylistPlay />
        </IconButton>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CtrlGroup);

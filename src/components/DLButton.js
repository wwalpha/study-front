import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Download from 'material-ui/svg-icons/file/file-download';
import { blue500 } from 'material-ui/styles/colors';
import { SaveAs } from '../utils/FileUtils';

class DLButton extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.fileData !== this.props.fileData) {
      const fileData = nextProps.fileData.replace(/◆/g, '\n');
      const blob = new Blob([fileData], { type: 'text' });
      const uri = URL.createObjectURL(blob);

      SaveAs(uri, this.props.fileName);

      return false;
    }

    return true;
  }

  render() {
    const styles = {
      style: {
        width: '48px',
      },
    };

    return (
      <IconButton
        style={Object.assign({}, styles.style, this.props.style)}
        tooltip="ダウンロード"
        tooltipPosition="bottom-center"
        onTouchTap={this.props.onTouchTap}
      >
        <Download color={this.props.color} />
      </IconButton>
    );
  }
}

DLButton.defaultProps = {
  color: blue500,
};

DLButton.props = {
  fileData: PropTypes.string,
  fileName: PropTypes.string,
  onTouchTap: PropTypes.func,
  style: PropTypes.object,
  color: PropTypes.object,
};

export default DLButton;

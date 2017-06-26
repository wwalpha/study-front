import React, { Component } from 'react'
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

class UploadButton extends Component {

  constructor(){
    super();

    this.handleOnclick = this.handleOnclick.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleOnclick() {
    this.inputFile.click();
  }

  handleOnchange(e) {
    this.props.onUpload(e.target.files[0]);
  }

  render() {
    return (
      <div style={this.props.style}>
        <IconButton
          style={this.props.iconStyle}
          tooltip={this.props.tooltip}
          tooltipPosition={this.props.tooltipPosition}
          onTouchTap={this.handleOnclick}
        >
          {this.props.icon}
        </IconButton>
        <input
          type="file"
          ref={(inputFile) => { this.inputFile = inputFile; }}
          style={{ display: 'none' }}
          onChange={this.handleOnchange}
        />
      </div>
    );
  }
}

UploadButton.defaultProps = {
  onUpload: () => {},
}

UploadButton.props = {
  fileData: PropTypes.string,
  fileName: PropTypes.string,
  onTouchTap: PropTypes.func,
  style: PropTypes.object,
  iconStyle: PropTypes.object,
  color: PropTypes.object,
  tooltip: PropTypes.string,
  tooltipPosition: PropTypes.string,
  icon: PropTypes.object.isRequired,
  onUpload: PropTypes.func.isRequired,
}

export default UploadButton;
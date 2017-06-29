import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Divider extends Component {
  render() {
    const style = {
      color: this.props.color,
      backgroundColor: this.props.backgroundColor,
      width: this.props.width,
      height: this.props.height,
      marginLeft: this.props.marginLeft,
      lineHeight: '56px',
      display: 'block',
    };

    return (
      <span style={Object.assign({}, style, this.props.style)} />
    );
  }
}

Divider.defaultProps = {
  color: 'rgba(0,0,0,0.4)',
  backgroundColor: 'rgba(0,0,0,0.176)',
  height: '32px',
  width: '1px',
  marginLeft: '12px',
};

Divider.props = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  marginLeft: PropTypes.string,
  style: PropTypes.object,
};

export default Divider;

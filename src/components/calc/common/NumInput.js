import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 *  数字入力部品
 */
class NumInput extends Component {

  render() {
    const style = {
      width: this.props.width,
      height: this.props.height,
      fontSize: '32px',
      fontWeight: 'bold',
      borderStyle: 'dashed',
      borderColor: 'slateblue',
      textAlign: 'right',
      margin: '4px',
    };

    return (
      <input
        style={style}
        type="number"
        pattern="\d*"
      />
    );
  }
}

NumInput.defaultProps = {
  width: '100px',
  height: '42px',
};

NumInput.props = {
  value: PropTypes.number,
  width: PropTypes.string,
};

export default NumInput;

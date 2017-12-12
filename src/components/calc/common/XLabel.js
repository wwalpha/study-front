import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 *  ラベル
 */
class XLabel extends Component {

  render() {
    return (
      <label style={{
        backgroundColor: 'deepskyblue',
        width: '80px',
        display: 'block',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: '10px',
      }}>
        {this.props.title}
      </label> 
    );
  }
}

XLabel.props = {
  title: PropTypes.string.isRequired,
};

export default XLabel;

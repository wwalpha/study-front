import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  iconStyle: {
    marginRight: '0px',
  }
}
class XCheckbox extends Component {

  render() {
    return (
      <Checkbox
        iconStyle={Object.assign({}, styles.iconStyle, this.props.iconStyle)}
        className={this.props.className}
        checkedIcon={this.props.checkedIcon}
        uncheckedIcon={this.props.uncheckedIcon}
      />
    );
  }
}

XCheckbox.defaultProps = {
};

XCheckbox.props = {
  className: PropTypes.string,
  iconStyle: PropTypes.object,
  checkedIcon: PropTypes.element,
  uncheckedIcon: PropTypes.element,
};

export default XCheckbox;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  iconStyle: {
    marginRight: '0px',
  },
  labelStyle: {
    width: 'auto',
    paddingLeft: '4px',
    paddingRight: '4px',
  },
}
class XCheckbox extends Component {

  render() {
    return (
      <Checkbox
        label={this.props.label}
        iconStyle={Object.assign({}, styles.iconStyle, this.props.iconStyle)}
        labelStyle={Object.assign({}, styles.labelStyle, this.props.labelStyle)}
        className={this.props.className}
        checkedIcon={this.props.checkedIcon}
        uncheckedIcon={this.props.uncheckedIcon}
        checked={this.props.checked}
        onCheck={this.props.onCheck}
        disabled={this.props.disabled}
      />
    );
  }
}

XCheckbox.defaultProps = {
};

XCheckbox.props = {
  className: PropTypes.string,
  checkedIcon: PropTypes.element,
  uncheckedIcon: PropTypes.element,
  label: PropTypes.string,
  iconStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
  disabled: PropTypes.bool,
};

export default XCheckbox;

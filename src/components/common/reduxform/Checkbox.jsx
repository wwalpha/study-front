import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import CheckboxUI from 'material-ui/Checkbox';

/* eslint-disable react/prop-types */
const renderField = ({
  input,
  meta,
  classes,
  checkboxType,
  ...props
}) => (
  <CheckboxUI
    {...props}
    value={input.value !== undefined ? String(input.value) : undefined}
    onChange={input.onChange}
    classes={classes}
    type={checkboxType}
  />
);
/* eslint-enable react/prop-types */

class Checkbox extends Component {
  render() {
    const {
      name, validate, type, ...props
    } = this.props;

    return (
      <Field
        name={name}
        validate={validate}
        component={renderField}
        checkboxType={type}
        {...props}
      />
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.string),
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  indeterminateIcon: PropTypes.node,
  inputProps: PropTypes.objectOf(PropTypes.object),
  inputRef: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Checkbox;

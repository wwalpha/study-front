import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { RadioGroup as RadioGroupUI } from 'material-ui/Radio';

/* eslint-disable react/prop-types */
const renderField = ({
  input,
  children,
  classes,
}) => (
  <RadioGroupUI
    name={input.name}
    value={input.value}
    onChange={input.onChange}
    classes={classes}
  >
    {children}
  </RadioGroupUI>
);
/* eslint-enable react/prop-types */

class RadioGroup extends Component {
  render() {
    const {
      name, validate, children, ...props
    } = this.props;

    return (
      <Field
        name={name}
        validate={validate}
        component={renderField}
        {...props}
      >
        {children}
      </Field>
    );
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string),
};

export default RadioGroup;

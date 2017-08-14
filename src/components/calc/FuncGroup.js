import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Add from 'material-ui/svg-icons/content/add-circle';
import Minus from 'material-ui/svg-icons/content/remove-circle';
import Multiply from 'material-ui/svg-icons/navigation/cancel';

const styles = {
  radioButtonGroup: {
    display: 'flex',
    width: 'auto',
  },
  radioButton: {
    rippleColor: 'red',
    width: '24px',
    margin: '0px 2px',
  },
  iconStyle: {
    width: 'inherit',
  },
};


class FuncGroup extends Component {

  render() {
    return (
      <RadioButtonGroup
        name="calc"
        style={styles.radioButtonGroup}
        defaultSelected="+"
        onChange={(e) => {
          this.props.actions.optChange(e.target.value);
        }}
      >
        <RadioButton
          value="+"
          style={styles.radioButton}
          iconStyle={styles.iconStyle}
          checkedIcon={<Add />}
          uncheckedIcon={<Add />}
        />
        <RadioButton
          value="-"
          style={styles.radioButton}
          iconStyle={styles.iconStyle}
          checkedIcon={<Minus />}
          uncheckedIcon={<Minus />}
        />
        <RadioButton
          value="*"
          style={styles.radioButton}
          iconStyle={styles.iconStyle}
          checkedIcon={<Multiply />}
          uncheckedIcon={<Multiply />}
        />
      </RadioButtonGroup>
    );
  }
}

FuncGroup.props = {
  actions: PropTypes.func,
};

export default FuncGroup;

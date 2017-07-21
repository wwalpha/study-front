import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import LooksOne from 'material-ui/svg-icons/image/looks-one';
import LooksTwo from 'material-ui/svg-icons/image/looks-two';
import Looks3 from 'material-ui/svg-icons/image/looks-3';
import Looks4 from 'material-ui/svg-icons/image/looks-4';

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
          name="wordtype"
          style={styles.radioButtonGroup}
          defaultSelected={this.props.wordType}
          onChange={(e, value) => {
            this.props.actions.switchType(value);
          }}
        >
        <RadioButton
          value="1"
          style={styles.radioButton}
          iconStyle={styles.iconStyle}
          checkedIcon={<LooksOne />}
          uncheckedIcon={<LooksOne />}
        />
        <RadioButton
          value="2"
          style={styles.radioButton}
          iconStyle={styles.iconStyle}
          checkedIcon={<LooksTwo />}
          uncheckedIcon={<LooksTwo />}
        />
        <RadioButton
          value="3"
          style={styles.radioButton}
          iconStyle={styles.iconStyle}
          checkedIcon={<Looks3 />}
          uncheckedIcon={<Looks3 />}
        />
        <RadioButton
          value="4"
          style={styles.radioButton}
          iconStyle={styles.iconStyle}
          checkedIcon={<Looks4 />}
          uncheckedIcon={<Looks4 />}
        />
      </RadioButtonGroup>
    );
  }
}

FuncGroup.defaultProps = {
};

FuncGroup.props = {
  actions: PropTypes.func,
};

export default FuncGroup;

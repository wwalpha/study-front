import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LooksOne from 'material-ui-icons/LooksOne';
import LooksTwo from 'material-ui-icons/LooksTwo';
import Radio, { RadioGroup } from 'ui/reduxform/Radio';

export default class FuncGroup extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
  }

  render() {
    const { disabled } = this.props;

    return (
      <RadioGroup name="func">
        <Radio name="func" value="1" disabled={disabled} icon={<LooksOne />} checkedIcon={<LooksOne />} />
        <Radio name="func" value="2" disabled={disabled} icon={<LooksTwo />} checkedIcon={<LooksTwo />} />
      </RadioGroup>
    );
  }
}

import React, { Component } from 'react';
import LooksOne from 'material-ui-icons/LooksOne';
import LooksTwo from 'material-ui-icons/LooksTwo';
import Radio, { RadioGroup } from 'ui/reduxform/Radio';

export default class FuncGroup extends Component {
  render() {
    return (
      <RadioGroup name="func">
        <Radio name="func" value="1" icon={<LooksOne />} checkedIcon={<LooksOne />} />
        <Radio name="func" value="2" icon={<LooksTwo />} checkedIcon={<LooksTwo />} />
      </RadioGroup>
    );
  }
}

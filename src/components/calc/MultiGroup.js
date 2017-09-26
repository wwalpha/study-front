import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Add from 'material-ui/svg-icons/content/add-circle';
// import Minus from 'material-ui/svg-icons/content/remove-circle';
// import Multiply from 'material-ui/svg-icons/navigation/cancel';
import Checkbox from 'root/components/customize/XCheckbox';

import css from 'styles/calc/multigroup.css';
// import comCss from 'styles/common.css';

class MultiGroup extends Component {

  constructor(props) {
    super(props);

    this.handleOnCheck = this.handleOnCheck.bind(this);
  }

  handleOnCheck(isInputChecked, index) {
    const checked = [].concat(this.props.conditions);
    checked[index] = isInputChecked;

    this.props.onCheck(checked);
  }

  render() {
    return (
      <div className={css.container}>
        <Checkbox
          label="足し算"
          className={css.checkbox}
          onCheck={(e, isInputChecked) => this.handleOnCheck(isInputChecked, 0)}
          checked={this.props.conditions[0]}
          disabled={this.props.starting}
        />
        <Checkbox
          label="引き算"
          className={css.checkbox}
          onCheck={(e, isInputChecked) => this.handleOnCheck(isInputChecked, 1)}
          checked={this.props.conditions[1]}
          disabled={this.props.starting}
        />
        <Checkbox
          label="虫食い"
          className={css.checkbox}
          onCheck={(e, isInputChecked) => this.handleOnCheck(isInputChecked, 4)}
          checked={this.props.conditions[4]}
          disabled={this.props.starting}
        />
      </div>
    );
  }
}

MultiGroup.props = {
  onCheck: PropTypes.func,
  conditions: PropTypes.arrayOf(PropTypes.bool),
  starting: PropTypes.bool,
};

export default MultiGroup;

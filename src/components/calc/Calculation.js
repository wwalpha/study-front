import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import * as NumberUtils from 'root/utils/NumberUtils';
import css from 'styles/calc/calculation.css';
import { CNDT } from 'root/constant/Const';

class Calculation extends Component {

  constructor() {
    super();

    this.handleOnclick = this.handleOnclick.bind(this);

    this.state = {
      inputIdx: 4,
    };
  }


  componentWillMount() {
    if (this.props.conditions[CNDT.BUG]) {
      const rnd = NumberUtils.getRandom(1, this.getRandomMax(this.props.calcInfo));
      const index = (rnd - 1) * 2;
      this.setState({ inputIdx: index });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.conditions[CNDT.BUG]) {
      const rnd = NumberUtils.getRandom(1, this.getRandomMax(nextProps.calcInfo));
      const index = (rnd - 1) * 2;
      this.setState({ inputIdx: index });
    }
  }
  
  handleOnclick() {
    // if not type a value, skip
    if (this.numInput.value === '' || this.numInput.value === undefined) {
      return;
    }
    
    const calcInfo = Object.assign({}, this.props.calcInfo, {});
    const inputIdx = this.state.inputIdx;

    // 回答位置
    calcInfo.answerPos = inputIdx / 2;
    calcInfo.answer = this.numInput.value;
    calcInfo.startTime = this.props.startTime;

    this.props.answer(calcInfo);
    this.numInput.value = '';
  }

  getInput(key) {
    return (
      <input
        className={css.input}
        key={key + 1}
        ref={(numInput) => { this.numInput = numInput; }} 
        type="number"
        pattern="\d*"
      />
    );
  }

  getText(key, value) {
    if (value === undefined) {
      return;
    }

    return (<span key={key}>{value}</span>);
  }

  // max random input position
  getRandomMax(calcInfo) {
    // no data
    if (calcInfo === undefined) {
      return 1;
    }

    const {num3, num4, num5} = calcInfo;

    if (num5 != undefined) return 5;
    if (num4 != undefined) return 4;
    if (num3 != undefined) return 3;
  }

  render() {
    const row = [];

    if (Object.keys(this.props.calcInfo).length !== 0) {
      const {num1, num2, num3, num4, num5, opt1, opt2, opt3, opt4} = this.props.calcInfo;

      row.push(this.getText(1, num1));
      row.push(this.getText(2, opt1));
      row.push(this.getText(3, num2));
      row.push(this.getText(4, opt2));
      row.push(this.getText(5, num3));
      row.push(this.getText(6, opt3));
      row.push(this.getText(7, num4));
      row.push(this.getText(8, opt4));
      row.push(this.getText(9, num5));

      row.push(
        <RaisedButton
          key={10}
          primary
          label="Next"
          className={css.button}
          onTouchTap={this.handleOnclick}
        />
      );

      row[this.state.inputIdx] = this.getInput(this.state.inputIdx);
    }

    return (
      <div key={0} className={css.container}>
        {row}
      </div>    
    );
  }
}

Calculation.props = {
  calcInfo: PropTypes.object,
  calcKbn: PropTypes.string,
  startTime: PropTypes.string,
  answer: PropTypes.func.isRequired,
  conditions: PropTypes.arrayOf(PropTypes.bool),
};

export default Calculation;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'styles/calc/score.css';

const styles = {
  container: {
    padding: '8px'
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  result: {
    display: 'table-cell', 
  }
}

class Score extends Component {

  getText(rowIndex, columnIndex, value, answerPos, answer) {
    const dispValue = columnIndex === answerPos ? answer : value;
    const dispClass = columnIndex === answerPos ? css.border : css.noneBorder;

    return <span className={dispClass} key={rowIndex * 11000 + columnIndex}>{dispValue}</span>;
  }

  render() {

    if (Object.keys(this.props.scoreInfo).length === 0) {
      return <div key={0}/>;
    }

    const result = this.props.scoreInfo.map((value, idx) => {
      return (
        <div key={idx * 10000 + 1} className={css.item}>
          <span key={idx * 10000 + 2} className={css.number}>{idx + 1}.</span>
          <span key={idx * 10000 + 3} className={css.calc}>
            {this.getText(idx, 0,  value.num1, value.answerPos, value.answer)}
            {this.getText(idx, 91, value.opt1, value.answerPos)}
            {this.getText(idx, 1,  value.num2, value.answerPos, value.answer)}
            {this.getText(idx, 92, value.opt2, value.answerPos)}
            {this.getText(idx, 2,  value.num3, value.answerPos, value.answer)}
          </span>
          <span
            key={idx * 10000 + 4}
            style={Object.assign({}, styles.result, {
              color: value.success === '1' ? 'blue' : 'red',
            })}
          >
            {value.success === '1' ? '〇' : '×'}
          </span>
        </div>
      );
    });

    const total = this.props.scoreInfo.length;
    const correct = this.props.scoreInfo.filter(value => value.success === '1').length;

    return (
      <div key={0} style={styles.container}>
        <div key={1}>かいとう数：{total}　　せいかい数：{correct}　　とくてん：{Math.floor(correct / total * 100)}点</div>
        <div key={2} style={styles.container}>
          {result}
        </div>
      </div>
    );
  }
}

Score.props = {
  scoreInfo: PropTypes.arrayOf(PropTypes.object),
  starting: PropTypes.bool,
};

export default Score;

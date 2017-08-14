import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    padding: '8px'
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    display: 'table',
    //justifyContent: 'space-around',
    width: '33.3%',
  },
  number: {
    display: 'table-cell', 
    width: '20px',
  },
  calc: {
    display: 'table-cell', 
    width: '50%',
  },
  result: {
    display: 'table-cell', 
  }
}

class Score extends Component {

  render() {

    if (Object.keys(this.props.scoreInfo).length === 0) {
      return <div key={0}/>;
    }

    const result = this.props.scoreInfo.map((value, idx) => {
      return (
        <div key={idx * 10000 + 1} style={styles.item}>
          <div key={idx * 10000 + 2} style={styles.number}>{idx + 1}.</div>
          <div key={idx * 10000 + 3} style={styles.calc}>{value.leftNum}{value.operator}{value.rightNum}={value.answer}</div>
          <div
            key={idx * 10000 + 4}
            style={Object.assign({}, styles.result, {
              color: value.success === '1' ? 'blue' : 'red',
            })}
          >
            {value.success === '1' ? '〇' : '×'}
          </div>
        </div>
      );
    });

    const total = this.props.scoreInfo.length;
    const correct = this.props.scoreInfo.filter(value => value.success === '1').length;

    return (
      <div style={styles.container}>
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

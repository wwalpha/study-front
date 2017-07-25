import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    //justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '8px'
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
      return <div />;
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

    return (
      <div style={styles.container}>
        {result}
      </div>
    );
  }
}

Score.props = {
  scoreInfo: PropTypes.arrayOf(PropTypes.object),
};

export default Score;

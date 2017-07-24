import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import Menubar from './Menubar';
import * as Actions from 'root/actions/calc';

const styles = {
  container: {
    height: '100px',
    fontSize: '32px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: '100px',
    height: '42px',
    fontSize: '32px',
    fontWeight: 'bold',
    borderStyle: 'dashed',
    borderColor: 'slateblue',
    textAlign: 'right',
  },
  button:{
    display: 'inline-flex',
    fontSize: '14px',
  }
}
class CalculateApp extends Component {

  constructor() {
    super();

    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick() {
    this.props.actions.answer(this.props.calcInfo, this.resultNum.value);
    this.resultNum.value = ''; 
  }

  render() {
    const row = [];

    if (Object.keys(this.props.calcInfo).length !== 0) {
      row.push(<span key={1}>{this.props.calcInfo.leftNum}</span>);
      row.push(<span key={2}>{this.props.calcInfo.operator}</span>);
      row.push(<span key={3}>{this.props.calcInfo.rightNum}</span>);
      row.push(<span key={4}>=</span>);
      row.push(
        <input
          key={5}
          ref={(resultNum) => { this.resultNum = resultNum; }} 
          type="number" pattern="\d*" style={styles.input}
        />);
      row.push(
        <RaisedButton
          key={6}
          primary
          label="Next"
          style={styles.button}
          onTouchTap={this.handleOnclick}
        />
      );
    }

    return (
      <div>
        <Menubar />
        <div style={styles.container}>
          {row}
        </div>
      </div>
    );
  } 
}

const mapStateToProps = state => ({
  calcInfo: state.calc.calcInfo,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

CalculateApp.props = {
  actions: PropTypes.func,
  calcInfo: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculateApp);

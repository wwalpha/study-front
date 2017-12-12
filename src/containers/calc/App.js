import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menubar from 'root/components/calc/Menubar';
import SubMenubar from 'root/components/calc/SubMenubar';
import June01 from 'root/components/calc/firstgrade/June01';
import Calculation from 'root/components/calc/Calculation';
import Score from 'root/components/calc/Score';
import * as Actions from 'root/actions/calc';

class CalculateApp extends Component {

  componentDidUpdate(prevProps, prevState) {
    if (this.resultNum !== undefined) {
      this.resultNum.focus();
    }
  }

  render() {
    const display = [];

    if (Object.keys(this.props.calcInfo).length !== 0) {
      display.push(
        <Calculation
          calcInfo={this.props.calcInfo}
          conditions={this.props.conditions}
          startTime={this.props.startTime}
          answer={this.props.actions.answer}
        />
      );
    }
      
    if (Object.keys(this.props.scoreInfo).length !== 0) {
      display.push(
        <Score key={999} scoreInfo={this.props.scoreInfo} />
      );
    }

    return (
      <div>
        <Menubar />
        <SubMenubar starting={this.props.starting} />
        <June01 />
        {display}
      </div>
    );
  } 
}

const mapStateToProps = state => ({
  calcInfo: state.calc.calcInfo,
  scoreInfo: state.calc.scoreInfo,
  starting: state.calc.starting,
  startTime: state.calc.startTime,
  conditions: state.calc.conditions,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

CalculateApp.props = {
  actions: PropTypes.func,
  calcInfo: PropTypes.object,
  conditions: PropTypes.arrayOf(PropTypes.bool),
  scoreInfo: PropTypes.arrayOf(PropTypes.object),
  starting: PropTypes.bool,
  startTime: PropTypes.string,
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculateApp);

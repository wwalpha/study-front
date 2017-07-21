import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import Menubar from './Menubar';
import * as AppActions from 'root/actions';

class CalculateApp extends Component {

  render() {
    return (
      <div>
        <Menubar />
        <div
          style={{
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        {this.props.calcInfo.leftNum}
        {this.props.calcInfo.operator}
        {this.props.calcInfo.rightNum}
        = <input type="number" pattern="\d*" size="10" style={{ width: '100px' }} />
          <RaisedButton
            primary
            label="Next"
          />
      </div>
      </div>
    );
  } 
}

const mapStateToProps = state => ({
  calcInfo: state.calc.calcInfo,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

CalculateApp.props = {
  actions: PropTypes.func,
  calcInfo: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculateApp);

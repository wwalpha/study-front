import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Functionbar from './Functionbar';
import * as AppActions from '../actions';

class CalculateApp extends Component {

  render() {
    return (
      <div>
        <Functionbar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initCmp: state.app.initCmp,
  visible: state.app.visible,
  words: state.word.currPage,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

CalculateApp.props = {
  actions: PropTypes.object.isRequired,
  words: PropTypes.arrayOf(PropTypes.object),
  initCmp: PropTypes.number,
  visible: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculateApp);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hot } from 'react-hot-loader';
import Menubar from 'src/containers/Menubar';
import Word from 'src/containers/Word';
import * as AppActions from 'src/actions/eng';

class App extends Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
  }

  /* 初回の描画時にのみ呼び出される */
  componentWillMount = () => this.props.actions.users();

  render() {
    return (
      <React.Fragment>
        <Menubar />
        <Word />
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => ({
  // initCmp: state.app.initCmp,
  // visible: state.app.visible,
  // words: state.word.currPage,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

App.props = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(hot(module)(App));

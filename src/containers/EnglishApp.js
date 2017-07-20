import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menubar from './Menubar';
import Functionbar from './Functionbar';
import Word from '../components/Word';
import * as AppActions from '../actions';

class EnglishApp extends Component {

  /* 初回の描画時にのみ呼び出される */
  componentWillMount() {
    if (this.props.initCmp === 0) {
      this.props.actions.users();
    }
  }

  render() {
    if (this.props.initCmp !== 100) {
      return <div />;
    }

    const words = [];

    if (this.props.words !== undefined) {
      this.props.words.forEach((row, i) => {
        words.push(
          <Word
            key={i}
            datas={row}
            visible={this.props.visible}
            onCheck={this.props.actions.onCheck}
            onFavorite={this.props.actions.favorite}
          />,
        );
      });
    }

    return (
      <div>
        <Functionbar />
        <Menubar />
        <div style={{ height: '8px' }} />
        {words}
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

EnglishApp.props = {
  actions: PropTypes.object.isRequired,
  words: PropTypes.arrayOf(PropTypes.object),
  initCmp: PropTypes.number,
  visible: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnglishApp);

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Checkbox from 'material-ui/Checkbox';
import Menubar from './Menubar';
import Word from '../components/Word';
import * as AppActions from '../actions';

class App extends Component {

  /* 初回の描画時にのみ呼び出される */
  componentWillMount() {
    if (this.props.initCmp == 0) {
      this.props.actions.users();
    }
  }

  render() {
    if (this.props.initCmp !== 100) {
      return <div />;
    }

    let words = [];
    
    if (this.props.words !== undefined) {
      this.props.words.forEach((row, i) => {
        words.push(
          <Word
            key={i}
            datas={row} 
            visible={this.props.visible}
            onCheck={this.props.actions.onCheck}
            onFavorite={this.props.actions.favorite}
          />
        );
      });
    }

    return (
      <div>
        <Menubar />
        <div style={{ height: '8px' }} />
        {words}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    initCmp: state.app.initCmp,
    visible: state.app.visible,
    words: state.word.currPage,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch)
})

App.props = {
  actions: PropTypes.object.isRequired,
  words: PropTypes.arrayOf(PropTypes.object),
  initCmp: PropTypes.number,
  visible: PropTypes.bool,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

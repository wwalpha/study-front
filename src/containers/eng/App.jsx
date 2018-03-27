import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from 'src/actions/eng';

class App extends Component {
  /* 初回の描画時にのみ呼び出される */
  // componentWillMount = () => {
  //   if (this.props.initCmp === 0) {
  //     this.props.actions.users();
  //   }
  // }

  render() {
    const items = [];

    // if (this.props.initCmp === 100) {
    //   items.push(<Menubar key={10000} />);
    //   items.push(<div key={10001} style={{ height: '8px' }} />);

    //   if (this.props.words !== undefined) {
    //     this.props.words.forEach((row, i) => {
    //       items.push(<Word
    //         key={i}
    //         datas={row}
    //         visible={this.props.visible}
    //         onCheck={this.props.actions.onCheck}
    //         onFavorite={this.props.actions.favorite}
    //       />);
    //     });
    //   }
    // }

    return (
      <div ref={(container) => { this.container = container; }}>
        {items}
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

App.props = {
  actions: PropTypes.objectOf(PropTypes.func),
  words: PropTypes.arrayOf(PropTypes.object),
  initCmp: PropTypes.number,
  visible: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

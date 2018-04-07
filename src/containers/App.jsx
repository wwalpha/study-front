import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formValueSelector } from 'redux-form/immutable';
import Immutable from 'immutable';
import { hot } from 'react-hot-loader';
import Menubar from 'src/containers/Menubar';
import Word from 'src/components/words/Word';
import * as AppActions from 'src/actions/eng';

class App extends Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    app: PropTypes.instanceOf(Immutable.Record),
    visible: PropTypes.bool,
  }

  /* 初回の描画時にのみ呼び出される */
  componentWillMount = () => this.props.actions.users();

  handleClickMark = rowIndex => this.props.actions.selected(rowIndex);
  handleClickFavorite = rowIndex => this.props.actions.favorite(rowIndex);

  render() {
    const { app, visible } = this.props;
    return (
      <React.Fragment>
        <Menubar />
        <Word
          visible={visible}
          dataList={app.words}
          page={app.page}
          rowsPerPage={app.rowsPerPage}
          onClickMark={this.handleClickMark}
          onClickFavorite={this.handleClickFavorite}
        />
      </React.Fragment>
    );
  }
}

const selector = formValueSelector('menubar');

const mapStateToProps = state => ({
  app: state.app,
  visible: selector(state, 'visible'),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(hot(module)(App));

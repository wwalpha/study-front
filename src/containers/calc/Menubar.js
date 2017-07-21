import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';

import * as MenuActions from 'root/actions/menu';
import * as RouteActions from 'root/actions/route';

import Divider from 'root/components/Divider';
import FuncMenu from 'root/components/FuncMenu';

const styles = {
  container: {
    height: '36px',
    display: 'flex',
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
  },
  btnStyle:{
    borderRadius: '0px',
    boxShadow: 'none',
    minWidth: '72px',
  },
  buttonStyle:{
    borderRadius: '0px',
    lineHeight: '24px',
    height: '24px',
  },
  overlayStyle:{
    borderRadius: '0px',
  },
  labelStyle: {
    padding: '0px',
  }
};

class Menubar extends Component {

  render() {
    return (
      <div style={styles.container}>
        <FuncMenu actions={this.props.routeActions} />
        <Divider height="28px" width="2px" style={{ margin: '4px 4px' }} />
        <RaisedButton
          primary
          label="スタート"
          style={styles.btnStyle}
          buttonStyle={styles.buttonStyle}
          overlayStyle={styles.overlayStyle}
          labelStyle={styles.labelStyle}
        />
        <RaisedButton
          primary
          label="成績発表"
          style={styles.btnStyle}
          buttonStyle={styles.buttonStyle}
          overlayStyle={styles.overlayStyle}
          labelStyle={styles.labelStyle}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.app.visible,
  users: state.app.users,
  currUser: state.app.currUser,
  checkedUser: state.app.checkedUser,
  wordType: state.app.wordType,
  fileData: state.word.fileData,
  allWords: state.word.words,
  currWords: state.word.currPage,
  uploadStatus: state.app.uploadStatus,
  playlist: state.word.playlist,
  ctgNames: state.app.ctgNames,
  ctgValues: state.app.ctgValues,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MenuActions, dispatch),
  routeActions: bindActionCreators(RouteActions, dispatch),
});

Menubar.defaultProps = {
  users: [],
  playlist: [],
  ctgNames: [],
};

Menubar.props = {
  actions: PropTypes.func,
  routeActions: PropTypes.func,
  visible: PropTypes.bool,
  currUser: PropTypes.string,
  users: PropTypes.string,
  checkedUser: PropTypes.number,
  wordType: PropTypes.string,
  fileData: PropTypes.string,
  allWords: PropTypes.arrayOf(PropTypes.object),
  currWords: PropTypes.arrayOf(PropTypes.object),
  uploadStatus: PropTypes.string,
  playlist: PropTypes.arrayOf(PropTypes.object),
  ctgNames: PropTypes.arrayOf(PropTypes.string),
  ctgValues: PropTypes.arrayOf(PropTypes.string),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menubar);

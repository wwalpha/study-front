import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';

import * as Actions from 'root/actions/calc';
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
    height: '24px',
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
          onTouchTap={this.props.actions.start}
        />
        <RaisedButton
          primary
          label="成績発表"
          style={styles.btnStyle}
          buttonStyle={styles.buttonStyle}
          overlayStyle={styles.overlayStyle}
          labelStyle={styles.labelStyle}
          onTouchTap={this.props.actions.score}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
  routeActions: bindActionCreators(RouteActions, dispatch),
});

Menubar.defaultProps = {
};

Menubar.props = {
  actions: PropTypes.func,
  routeActions: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menubar);

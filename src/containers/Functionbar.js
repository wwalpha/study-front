import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as Actions from '../actions/menu';

const styles = {
  container: {
    height: '24px',
    display: 'flex',
    alignItems: 'center',
  },
  buttonRoot: {
    boxShadow: 'none',
    borderRadius: '0px',
    //padding: '0px 2px 0px 2px',
  },
  buttonStyle: {
    borderRadius: '0px',
    lineHeight: '24px',
    height: '24px',
  },
  labelStyle: {
    //borderRadius: '0px',
    //height: '24px',
  },
  overlayStyle:{
    height: '24px',
  }
};

class Functionbar extends Component {

  render() {
    
    return (
      <div style={styles.container}>
        <RaisedButton
          label="英語"
          primary
          style={styles.buttonRoot}
          buttonStyle={styles.buttonStyle}
          labelStyle={styles.labelStyle}
          overlayStyle={styles.overlayStyle}
          onTouchTap={this.props.actions.routeEng}
        />
        <RaisedButton
          label="たしざん"
          primary
          style={styles.buttonRoot}
          buttonStyle={styles.buttonStyle}
          labelStyle={styles.labelStyle}
          overlayStyle={styles.overlayStyle}
          onTouchTap={this.props.actions.routeCalc}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

Functionbar.defaultProps = {
};

Functionbar.props = {
  actions: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Functionbar);


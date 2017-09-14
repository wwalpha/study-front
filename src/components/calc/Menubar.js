import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from 'root/actions/calc';
import * as RouteActions from 'root/actions/route';

import Divider from 'root/components/Divider';
import FuncMenu from 'root/components/FuncMenu';
// import FuncGroup from './FuncGroup';
import MultiGroup from './MultiGroup';

const styles = {
  container: {
    height: '36px',
    display: 'flex',
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
  },
};

class Menubar extends Component {

  render() {
    return (
      <div style={styles.container}>
        <FuncMenu actions={this.props.routeActions} />
        <Divider height="28px" width="2px" style={{ margin: '4px 4px' }} />
        <MultiGroup />
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

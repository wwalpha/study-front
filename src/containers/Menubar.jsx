import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import CtrlGroup from 'components/menubar/CtrlGroup';
import FuncGroup from 'components/menubar/FuncGroup';
import UserProps from 'components/menubar/UserProps';

class Menubar extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.string),
  }
  render() {
    const { users } = this.props;

    return (
      <form>
        <FuncGroup />
        <CtrlGroup />
        <UserProps users={users} />
      </form>
    );
  }
}

Menubar.props = {
  actions: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.app.users,
});

const menubar = reduxForm({
  form: 'menubar',
  enableReinitialize: true,
})(Menubar);

export default connect(
  mapStateToProps,
  null,
)(menubar);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from 'material-ui-icons/Person';
import Menu, { MenuItem } from 'material-ui/Menu';

import { IconButton } from 'comp';

export default class UserProps extends Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    users: PropTypes.arrayOf(PropTypes.string),
  }

  state = {
    open: false,
  }

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  render() {
    const { actions, users = [] } = this.props;
    console.error(actions, users);
    return (
      <React.Fragment>
        <IconButton onClick={this.handleOpen}>
          <Person />
        </IconButton>
        <Menu
          open={this.state.open}
          onClose={this.handleOpen}
        >
          {users.map(item => <MenuItem>{item}</MenuItem>)}
        </Menu>
      </React.Fragment>
    );
  }
}

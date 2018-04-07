import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutale from 'immutable';
import Person from 'material-ui-icons/Person';
import Menu, { MenuItem } from 'material-ui/Menu';
import { IconButton } from 'ui/Button';

export default class UserProps extends Component {
  static propTypes = {
    users: PropTypes.instanceOf(Immutale.List),
    userChange: PropTypes.func,
  }

  state = {
    anchorEl: null,
  }

  handleOpen = e => this.setState({ anchorEl: e.currentTarget });
  handleClose = () => this.setState({ anchorEl: null });

  handleClick = (item) => {
    const { userChange } = this.props;
    this.handleClose();
    // ユーザ選択
    userChange(item);
  }
  render() {
    const { users = [] } = this.props;
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
        <IconButton onClick={this.handleOpen}>
          <Person />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {
            users.map(user => (
              <MenuItem
                key={user}
                onClick={() => this.handleClick(user.userName)}
              >
                {user.userName}
              </MenuItem>
            ))
          }
        </Menu>
      </React.Fragment>
    );
  }
}

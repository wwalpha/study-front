import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { blue600 } from 'material-ui/styles/colors';

const styles = {
  iconMenu: {
    width: '24px',
    height: '24px',
    padding: '0px',
    margin: '0px 4px',
  },
  iconButton: {
    width: '24px',
    height: '24px',
    padding: '0px',
    margin: '0px 4px',
  },
  menuItemStyle: {
    lineHeight: '24px',
    minHeight: '24px',
    fontSize: '14px',
  },
  innerDivStyle: {
    paddingRight: '8px',
    paddingLeft: '36px',
    fontSize: '14px',
  },
};

class FuncMenu extends Component {

  render() {
   const iconButton = (
      <IconButton
        style={styles.iconButton}
        tooltipPosition="bottom-center"
      >
        <Menu color={blue600} />
      </IconButton>
   );

    return (
      <IconMenu
        style={styles.iconMenu}
        iconButtonElement={iconButton}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem
          primaryText="英語"
          style={styles.menuItemStyle}
          innerDivStyle={styles.innerDivStyle}
          onTouchTap={this.props.actions.routeEng}
        />
        <MenuItem
          primaryText="すうがく"
          style={styles.menuItemStyle}
          innerDivStyle={styles.innerDivStyle}
          onTouchTap={this.props.actions.routeCalc}
        />
      </IconMenu>
    );
  }
}

FuncMenu.props = {
  actions: PropTypes.object.isRequired,
};

export default FuncMenu;

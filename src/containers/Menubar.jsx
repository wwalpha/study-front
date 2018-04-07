import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { reduxForm, change, formValueSelector } from 'redux-form/immutable';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import Grid from 'material-ui/Grid';
import CtrlGroup from 'components/menubar/CtrlGroup';
import FuncGroup from 'components/menubar/FuncGroup';
import UserProps from 'components/menubar/UserProps';
import * as MenuActions from 'src/actions/eng';
import { isEmpty } from 'utils/StringUtils';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.grey[300],
    paddingLeft: theme.spacing.unit,
  },
});

class Menubar extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    app: PropTypes.instanceOf(Immutable.Record),
    formValues: PropTypes.objectOf(PropTypes.any),
    actions: PropTypes.objectOf(PropTypes.func),
    formSet: PropTypes.func,
  };

  handleShowVisible = () => this.props.formSet('visible', !this.props.formValues.visible);

  handleNext = () => {
    const { actions, app, formValues } = this.props;
    actions.next(app.currUser, formValues.func);
  }

  handleBack = () => this.props.actions.prevPage();

  render() {
    const {
      classes, app, actions, formValues = {},
    } = this.props;
    const { currUser } = app;

    return (
      <form>
        <Grid container spacing={0} className={classes.root}>
          <FuncGroup />
          <CtrlGroup
            visible={formValues.visible}
            showVisible={this.handleShowVisible}
            back={this.handleBack}
            next={this.handleNext}
            save={this.handleSave}
            play={this.handlePlay}
            disabled={isEmpty(currUser)}
          />
          <UserProps
            users={app.users}
            userChange={actions.userProps}
          />
        </Grid>
      </form>
    );
  }
}

const selector = formValueSelector('menubar');

const mapStateToProps = state => ({
  app: state.app,
  formValues: {
    visible: selector(state, 'visible'),
    func: selector(state, 'func'),
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MenuActions, dispatch),
  formSet: (field, value) => dispatch(change('menubar', field, value)),
});

const menubar = reduxForm({
  form: 'menubar',
  enableReinitialize: true,
})(Menubar);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(menubar));

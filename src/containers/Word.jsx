import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import Grid from 'material-ui/Grid';
import { Checkbox } from 'comp';

// const kvArray = [['A', String.fromCharCode(230)], ['B', String.fromCharCode(593)],
//   ['E', String.fromCharCode(601)], ['F', String.fromCharCode(643)], ['N', String.fromCharCode(331)],
//   ['Q', String.fromCharCode(652)], ['R', String.fromCharCode(596)], ['T', String.fromCharCode(240)],
//   ['V', String.fromCharCode(658)], ['W', String.fromCharCode(629)], ['Z', String.fromCharCode(603)],
//   [':', String.fromCharCode(720)], ['5', String.fromCharCode(39)], ['7', String.fromCharCode(44)],
// ];
// const map = new Map(kvArray);

class Word extends Component {
  static propTypes = {
    dataList: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { dataList = [{ a: '1' }] } = this.props;
    return (
      <form>
        {(() => dataList.map((dataRow, index) => {
          console.error(dataRow);
          return (
            <Grid container>
              <Grid item>
                <Checkbox name={`favorite[${index}]`} />
                <Checkbox name={`selected[${index}]`} />
              </Grid>
            </Grid>
          );
        }))()}
      </form>
    );
  }
}

export default reduxForm({
  form: 'word',
})(Word);

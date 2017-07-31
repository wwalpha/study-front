import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'moment'

import Countdown from 'root/components/Countdown'
import * as Actions from 'root/actions/calc';
import * as RouteActions from 'root/actions/route';

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
    marginLeft: '8px',
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

class SubMenubar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      endDate: '',
      showCountdown: false,
    }

    this.handleOnstart = this.handleOnstart.bind(this);
    this.handleOnend = this.handleOnend.bind(this);
  }

  handleOnstart(){
    this.setState({
      endDate: Moment().add(10,'m').format('YYYYMMDD HH:mm:ss'),
      showCountdown: true,
    })

    this.props.actions.start();
  }

  handleOnend() {
    this.setState({
      endDate: '',
      showCountdown: false,
    });

    this.props.actions.end();
  }

  render() {
    const countdown = this.state.showCountdown ? (<Countdown
      endDate={this.state.endDate}
      finished={this.handleOnend}
    />) : [];

    return (
      <div style={styles.container}>
        <RaisedButton
          primary
          label="スタート"
          style={styles.btnStyle}
          buttonStyle={styles.buttonStyle}
          overlayStyle={styles.overlayStyle}
          labelStyle={styles.labelStyle}
          disabled={this.props.starting}
          onTouchTap={this.handleOnstart}
        />
        <RaisedButton
          primary
          label="成績発表"
          style={styles.btnStyle}
          buttonStyle={styles.buttonStyle}
          overlayStyle={styles.overlayStyle}
          labelStyle={styles.labelStyle}
          disabled={this.props.starting}
          onTouchTap={this.props.actions.score}
        />
        {countdown}
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

SubMenubar.defaultProps = {
  starting: false,
};

SubMenubar.props = {
  starting: PropTypes.bool,
  actions: PropTypes.func,
  routeActions: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubMenubar);

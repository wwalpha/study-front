import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Moment from 'moment'

/**
 * Count down module
 * A simple count down component.
**/
export default class Countdown extends Component {

  constructor (props) {
    super(props)
    this.state = { remaining: null }
  }

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  dateBetween(startDate, endDate) {
    let second = 1;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let distance = endDate.unix() - startDate.unix();

    if (distance <= 0) {
      return false;
    }

    // let days = Math.floor(distance / day);
    let hours = Math.floor((distance % day) / hour);
    let minutes = Math.floor((distance % hour) / minute);
    let seconds = Math.floor((distance % minute) / second);

    let between = [];

    if (distance < minute) {
      between.push('00');
      between.push(seconds.toString().padStart(2, '0'))
    } else if (distance < hour) {
      between.push(minutes.toString().padStart(2, '0'))
      between.push(seconds.toString().padStart(2, '0'))
    } else if (distance < day) {
      between.push(hours.toString().padStart(2, '0'))
      between.push(minutes.toString().padStart(2, '0'))
      between.push(seconds.toString().padStart(2, '0'))
    }

    return between.join(':');
  }

  tick() {
    let startDate = Moment();
    let endDate = Moment(this.props.endDate, 'YYYYMMDD HH:mm:ss');
    let remaining = this.dateBetween(startDate, endDate)

    this.setState({
      remaining: remaining ? remaining : ''
    });

    if(remaining === false){
      window.clearInterval(this.interval);
      this.props.finished();
    }
  }

  render() {
    return (
      <div style={{ paddingLeft: '8px' }}>
       <span className="date"> {this.state.remaining}</span>
      </div>
    )
  }
}

Countdown.defaultProps = {
  finished: () => {},
};

Countdown.props = {
  endDate: PropTypes.string,
  finished: PropTypes.func,
};

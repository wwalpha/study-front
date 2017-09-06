import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menubar from './Menubar';
import Word from 'root/components/Word';
import * as AppActions from 'root/actions';
// import * as MenuActions from 'root/actions/menu';

class App extends Component {

  /* 初回の描画時にのみ呼び出される */
  componentWillMount() {
    if (this.props.initCmp === 0) {
      this.props.actions.users();
    }
  }

  // componentDidUpdate() {
  //   const container = this.container;

  //   let startX, startY, dist,
  //     threshold = 150, //required min distance traveled to be considered swipe
  //     allowedTime = 200, // maximum time allowed to travel that distance
  //     elapsedTime,
  //     startTime;

  //   function handleswipe(isrightswipe){
  //     if (isrightswipe)
  //       alert(1);
  //     else{
  //       alert(2);
  //     }
  //   }

  //   container.addEventListener('touchstart', function(e){
  //     var touchobj = e.changedTouches[0];
  //     dist = 0;
  //     startX = touchobj.pageX;
  //     startY = touchobj.pageY;
  //     startTime = new Date().getTime(); // record time when finger first makes contact with surface
  //     e.preventDefault();
  //   }, false);

  //   container.addEventListener('touchmove', function(e){
  //     e.preventDefault(); // prevent scrolling when inside DIV
  //   }, false);

  //   container.addEventListener('touchend', function(e){
  //     var touchobj = e.changedTouches[0];
  //     dist = touchobj.pageX - startX; // get total dist traveled by finger while in contact with surface
  //     elapsedTime = new Date().getTime() - startTime; // get time elapsed
  //     // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
  //     var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100);
  //     handleswipe(swiperightBol);
  //     e.preventDefault();
  //   }, false);
  // }

  render() {
    const items = [];

    if (this.props.initCmp == 100) {
      items.push(<Menubar key={10000} />);
      items.push(<div key={10001} style={{ height: '8px' }} />);

      if (this.props.words !== undefined) {
        this.props.words.forEach((row, i) => {
          items.push(
            <Word
              key={i}
              datas={row}
              visible={this.props.visible}
              onCheck={this.props.actions.onCheck}
              onFavorite={this.props.actions.favorite}
            />,
          );
        });
      }
    }

    return (
      <div ref={(container) => { this.container = container; }}>
        {items}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initCmp: state.app.initCmp,
  visible: state.app.visible,
  words: state.word.currPage,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
  // mActions: bindActionCreators(MenuActions, dispatch),
});

App.props = {
  actions: PropTypes.object.isRequired,
  // mActions: PropTypes.object.isRequired,
  words: PropTypes.arrayOf(PropTypes.object),
  initCmp: PropTypes.number,
  visible: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

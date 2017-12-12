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
    const sortItems = (settings) => {
      const items = Object.keys(settings);
      const length = items.length;

      return (obj1, obj2) => {
        let i = 0;
        let result = 0;

        while(result === 0 && i < length) {
          const key = items[i];
          const value = settings[key];
          const property = { key, sort: value };

          result = (function (prop) {
            const order = prop.sort ? 1 : -1;
            const item = prop.key;


            return (a, b) => {
              var result = (a[item] < b[item]) ? -1 : (a[item] > b[item]) ? 1 : 0;
              return result * order;
            }
          }(property))(obj1, obj2);

          i++;
        }

        return result;
      }
    }

  const datas = [
    {a: 1, b: 1, c:1},
    {a: 1, b: 2, c:1},
    {a: 1, b: 3, c:2},
    {a: 2, b: 4, c:2},
    {a: 2, b: 5, c:3},
    {a: 2, b: 6, c:3},
  ]

    datas.sort(sortItems({ a: true, c: true }));
    // console.log(datas);

    Object.prototype.values = function(){var o=this;var r=[];for(var k in o) if(o.hasOwnProperty(k)){r.push(o[k])}return r};
    
    // JSON配列を指定のキーで集計する
    // Array.prototype.groupBy = function(keys,sumKeys) {
    //     var hash = this.reduce(function(res,data) {
    //         // 集計キーを作成
    //         var key = keys.reduce(function(s,k) {
    //             s += data[k];
    //             return s;
    //         },'');
            
    //         // 初めての集計キー
    //         if(!(key in res)) {
    //             // 集計キーをオブジェクトに設定
    //             var keyList = keys.reduce(function(h,k) {
    //                 h[k] = data[k];
    //                 return h;
    //             },{});
    //             // 集計項目の初期値を設定
    //             res[key] = sumKeys.reduce(function(h,k) {
    //                 h[k] = 0;
    //                 return h;
    //             }, keyList);
    //         }
    //         // データを集計（加算）
    //         sumKeys.forEach(function(k){
    //             res[key][k] += data[k];
    //         });
    
    //         return res;
    //     },{});
    
    //     return hash.values();
    // };


      // const teamHits = npbScores.groupBy(["year", "team"],["hit"]);

      // const groupby_max = (datas, items, maxItems) => {
      //   const group = {};

      //   datas.forEach((dataRow) => {
      //     const key = items.map(item => dataRow[item]).join('');

      //     group[key] = [dataRow];
      //   });

      //   console.log(grouped);
      // }
      const aaa = {
        a:1,
        b:2
      };
      console.log({...aaa, b:1});

// const groupby_sum = (datas, groupItems, sumItems) => {
//   const group = datas.reduce((result, dataRow) => {
//     // key1key2
//     const key = groupItems.map(item => dataRow[item]).join('');
//     // { key1: value1, key2: value2 }
//     const item = groupItems.reduce((a,b) => {
//       a[b] = dataRow[b];

//       return a;
//     }, {});

//     if (Object.prototype.hasOwnProperty.call(result, key)) {
//       result.key.count += 1;
//       // result.key[] += 1;
//     } else {
//       result[key] = {...result[key], count: 1};
//       result[key] = [item];
//     }

//     // { key1key2: [{ key1: value1, key2: value2 }, { key1: value1, key2: value2 }] }
//     return result;
//   }, {});

//   return group;
// };

const groupby_max = (datas, groupItems, maxItem) => {
  const group = datas.reduce((result, dataRow) => {
    const key = groupItems.map(item => dataRow[item]).join('');

    if (Object.prototype.hasOwnProperty.call(result, key)) {
      result[key].push(dataRow);
    } else {
      result[key] = [dataRow];
    }

    return result;
  }, {});

  return Object.keys(group).map(key => {
    group[key].sort((a, b) => {
      // 降順
      if (a[maxItem] < b[maxItem]) return 1;
      if (a[maxItem] > b[maxItem]) return -1;
      return 0;
    });
    return group[key][0];
  });
};

      console.log(groupby_max(datas, ['a', 'c'], ['b']));
      
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

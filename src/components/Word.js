import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton';
import AddBox from 'material-ui/svg-icons/content/add-box';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Sound from 'material-ui/svg-icons/av/volume-up';
import { grey600 } from 'material-ui/styles/colors';
import { isIOS } from 'root/constant/Const';
import css from 'styles/words.css';

const ios = isIOS();
const kvArray = [['A', String.fromCharCode(230)], ['B', String.fromCharCode(593)], 
  ['E', String.fromCharCode(601)], ['F', String.fromCharCode(643)], ['N', String.fromCharCode(331)], 
  ['Q', String.fromCharCode(652)], ['R', String.fromCharCode(596)], ['T', String.fromCharCode(240)],
  ['V', String.fromCharCode(658)], ['W', String.fromCharCode(629)], ['Z', String.fromCharCode(603)],  
  [':', String.fromCharCode(720)], ['5', String.fromCharCode(39)], ['7', String.fromCharCode(44)],
];
const map = new Map(kvArray);

class Word extends Component {

  constructor() {
    super();

    this.handleOnCheck = this.handleOnCheck.bind(this);
  }

  handleOnCheck() {
    this.props.onCheck(this.props.datas.word);
  }

  render() {
    const styles = {
      iconStyle: {
        marginRight: '6px',
      },
      smallIcon: {
        width: '24px',
        height: '24px',
      },
    };

    const pronounce = [];

    if (ios) {
      Array.prototype.forEach.call(this.props.datas.pronounce, function(s) {
        var value = map.get(s);
  
        if (value !== undefined) {
          pronounce.push(value);
        } else {
          pronounce.push(s);
        }
      });
    } else {
      pronounce.push(this.props.datas.pronounce);
    }

    return (
      <div style={{ display: 'flex' }}>
        <div className={css.word}>
          <Checkbox
            className={css.checkbox}
            iconStyle={styles.iconStyle}
            checked={this.props.datas.favorite}
            onCheck={() => { this.props.onFavorite(this.props.datas.word); }}
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
          />
          <Checkbox
            className={css.checkbox}
            iconStyle={styles.iconStyle}
            checked={this.props.datas.checked}
            onCheck={this.handleOnCheck}
          />
          <div>{this.props.datas.word}</div>
        </div>
        <div className={css.pronounce}>
          <span>{pronounce.join('')}</span>
        </div>
        <div className={css.visible} style={{ display: this.props.visible ? '' : 'none' }}>
          <IconButton
            className={css.small}
            iconStyle={styles.smallIcon}
            href={['http://ejje.weblio.jp/content', this.props.datas.word].join('/')}
            target="_blank"
          >
            <AddBox color={grey600} />
          </IconButton>
          <IconButton
            className={css.small}
            iconStyle={styles.smallIcon}
            href={['http://dict.hjenglish.com/w', this.props.datas.word].join('/')}
            target="_blank"
          >
            <AddCircle color={grey600} />
          </IconButton>
          <IconButton
            className={css.small}
            iconStyle={styles.smallIcon}
            onTouchTap={() => {
              this.audio.play();
            }}
          >
            <Sound color={grey600} />
          </IconButton>
          <audio ref={(audio) => { this.audio = audio; }} src={this.props.datas.sound} preload="none" />
          <div style={{ paddingLeft: '4px' }} >{this.props.datas.vocabulary}</div>
        </div>
      </div>
    );
  }
}

Word.props = {
  datas: PropTypes.object,
  visible: PropTypes.bool,
  onCheck: PropTypes.func,
  onFavorite: PropTypes.func,
};

export default Word;

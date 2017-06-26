import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import css from '../../styles/words.css'
import AddBox from 'material-ui/svg-icons/content/add-box';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Sound from 'material-ui/svg-icons/av/volume-up';
import {grey600} from 'material-ui/styles/colors';

class Word extends Component {

  constructor() {
    super();

    this.handleOnCheck = this.handleOnCheck.bind(this);
  }

  handleOnCheck(e) {
    this.props.onCheck(this.props.datas.word);
  }

  render() {
    const styles = {
      checkbox: {
        width: 'inherit',
      },
      iconStyle: {
        marginRight: '6px',
      },
      kpp: {
        fontFamily: 'KingsoftPhoneticPlain',
        fontSize: '16px',
      },
      simsun: {
        fontFamily: 'SimSun',
      },
      word: {
        display: 'inline-flex',
        minWidth: '200px',
      },
      pronounce: {
        fontFamily: 'KingsoftPhoneticPlain',
        fontSize: '16px',
        minWidth: '150px',
        paddingTop: '4px',
      },
      visible: {
        display: this.props.visible ? 'inline-flex' : 'none',
      },
      small:{
        width: '24px',
        height: '24px',
        padding: '0px',
      },
      smallIcon:{
        width: '24px',
        height: '24px',
      }
    };

    return (
      <div style={{ display: 'flex'}}>
        <div style={{ display: 'inline-flex', minWidth: '200px'}}>
          <Checkbox
            style={styles.checkbox}
            iconStyle={styles.iconStyle}
            checked={this.props.datas.favorite}
            onCheck={e => { this.props.onFavorite(this.props.datas.word); }}
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
          />
          <Checkbox
            style={styles.checkbox}
            iconStyle={styles.iconStyle}
            checked={this.props.datas.checked}
            onCheck={this.handleOnCheck}
          />
          <div>{this.props.datas.word}</div>
        </div>
        <div style={styles.pronounce}>
          <span>{this.props.datas.pronounce}</span>
        </div>
        <div style={styles.visible}>
          <IconButton
            style={styles.small}
            iconStyle={styles.smallIcon}
            //tooltip="weblio辞書"
            //tooltipPosition="bottom-center"
            href={["http://ejje.weblio.jp/content",this.props.datas.word].join("/")}
            target="_blank"
          >
            <AddBox color={grey600} />
          </IconButton>
          <IconButton
            style={styles.small}
            iconStyle={styles.smallIcon}
            //tooltip="小D英語"
            //tooltipPosition="bottom-center"
            href={["http://dict.hjenglish.com/w",this.props.datas.word].join("/")}
            target="_blank"
          >
            <AddCircle color={grey600}/>
          </IconButton>          
          <IconButton
            style={styles.small}
            iconStyle={styles.smallIcon}
            onTouchTap={() => {
              this.audio.play();
            }}
          >
            <Sound color={grey600}/>
          </IconButton>
          <audio ref={(audio) => { this.audio = audio; }} src={this.props.datas.sound} type="audio/wav" preload="none" />
          <div style={{ paddingLeft: '4px' }} >{this.props.datas.vocabulary}</div>
        </div>
      </div>
    )
  }
}

Word.props = {
  datas: PropTypes.object,
  visible: PropTypes.bool,
  onCheck: PropTypes.func,
  onFavorite: PropTypes.func,
}

export default Word;
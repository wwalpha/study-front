import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Checkbox from 'ui/Checkbox';
import IconButton from 'ui/Button';
import Typography from 'material-ui/Typography';
import Favorite from 'material-ui-icons/Favorite';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';
import AddBox from 'material-ui-icons/AddBox';
import AddCircle from 'material-ui-icons/AddCircle';
import VolumeUp from 'material-ui-icons/VolumeUp';
// import grey from 'material-ui/colors/grey';

const kvArray = [['A', String.fromCharCode(230)], ['B', String.fromCharCode(593)],
  ['E', String.fromCharCode(601)], ['F', String.fromCharCode(643)], ['N', String.fromCharCode(331)],
  ['Q', String.fromCharCode(652)], ['R', String.fromCharCode(596)], ['T', String.fromCharCode(240)],
  ['V', String.fromCharCode(658)], ['W', String.fromCharCode(629)], ['Z', String.fromCharCode(603)],
  [':', String.fromCharCode(720)], ['5', String.fromCharCode(39)], ['7', String.fromCharCode(44)],
];
const map = new Map(kvArray);

const styles = () => ({
  hidden: {
    display: 'none',
  },
  pronounce: {
    fontSize: '1rem',
  },
});

class Word extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    dataList: PropTypes.instanceOf(Immutable.List),
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    visible: PropTypes.bool,
    onClickMark: PropTypes.func,
    onClickFavorite: PropTypes.func,
  }

  render() {
    const {
      classes, dataList = [], page, rowsPerPage, visible,
      onClickMark, onClickFavorite,
    } = this.props;
    const detailList = dataList.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

    return (
      <React.Fragment>
        {(() => detailList.map((dataRow, rowIndex) => (
          <Grid key={dataRow.word} container spacing={0} alignItems="center">
            <Grid item xs={3}>
              <Checkbox
                checked={dataRow.favorite}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                onClick={() => onClickFavorite(rowIndex)}
              />
              <Checkbox checked={dataRow.checked} onClick={() => onClickMark(rowIndex)} />
              {dataRow.word}
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.pronounce}>
                {(() => {
                  const pronounce = [];
                  Array.prototype.forEach.call(dataRow.pronounce, (s) => {
                    const value = map.get(s);

                    if (value !== undefined) {
                      pronounce.push(value);
                    } else {
                      pronounce.push(s);
                    }
                  });

                  return pronounce.join('');
                })()}
              </Typography>
            </Grid>
            <Grid item xs className={visible ? '' : classes.hidden}>
              <IconButton
                href={`http://ejje.weblio.jp/content/${dataRow.word}`}
                target="_blank"
              >
                <AddBox />
              </IconButton>
              <IconButton
                href={`http://dict.hjenglish.com/w/${dataRow.word}`}
                target="_blank"
              >
                <AddCircle />
              </IconButton>
              <IconButton >
                <VolumeUp />
              </IconButton>
              {dataRow.vocabulary}
            </Grid>
          </Grid>
        )))()}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Word);


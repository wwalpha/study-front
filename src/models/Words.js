import { Record, List } from 'immutable';
import Word from './Word';

const WordsRecord = Record({
  page: -1,
  rowsPerPage: 7,
  list: List(),
});

export default class Words extends WordsRecord {
  distinct() {
    const list = this.list.toJS();
    const newList = [];

    list.forEach((item) => {
      const ret = newList.find(subItem => item.id.wordNo === subItem.id.wordNo);

      if (ret === undefined) {
        newList.push(item);
      } else if (!ret.checked) {
        ret.checked = item.checked;
      }
    });

    return newList;
  }

  clearWords() {
    return this
      .set('list', List())
      .set('page', -1);
  }

  addWords(wordList) {
    // サーバから新規取得する
    let newList = wordList.map(item => new Word(item));
    // 既存と結合する
    newList = this.list.concat(List(newList));
    // ページ数再計算
    const page = Math.ceil(newList.size / this.rowsPerPage) - 1;

    return this
      .set('list', newList)
      .set('page', page);
  }

  clear(payload) {
    const { wordNo } = payload;

    const newList = this.list.filter(item => item.id.wordNo !== wordNo);
    const page = newList.size === 0 ? -1 : newList.size / this.rowsPerPage;
    return this
      .set('list', newList)
      .set('page', page);
  }

  nextPage() {
    return this.set('page', this.page + 1);
  }

  prevPage() {
    if (this.page <= 0) return this;
    return this.set('page', this.page - 1);
  }

  setSelected(rowIndex) {
    const index = (this.page * this.rowsPerPage) + rowIndex;
    const newList = this.list.update(index, value => value.set('checked', !value.checked));

    return this.set('list', newList);
  }

  setFavorite(rowIndex) {
    const index = (this.page * this.rowsPerPage) + rowIndex;
    const newList = this.list.update(index, value => value.set('favorite', !value.favorite));

    return this.set('list', newList);
  }
}

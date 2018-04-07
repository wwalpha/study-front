import { Record, List } from 'immutable';
import User from './User';
import Word from './Word';

const AppRecord = Record({
  initCmp: 0,
  visible: false,
  users: List(),
  currUser: '',
  words: List(),
  page: -1,
  rowsPerPage: 7,
  wordType: '1',
  ctgValues: [],
});

export default class App extends AppRecord {
  setUsers(users) {
    const array = users.map(item => new User().setUserName(item));

    return this.set('users', List(array));
  }

  setUserProps(props) {
    const ret = this.users.map((item) => {
      if (item.userName !== props.user) return item;

      return item.setUserProps(props);
    });

    return this
      .set('users', ret)
      .set('currUser', props.user);
  }

  clearWords() {
    return this
      .set('words', List())
      .set('page', -1);
  }

  addWords(wordList) {
    const newList = wordList.map(item => new Word(item));

    return this
      .set('words', this.words.concat(List(newList)))
      .nextPage();
  }

  save(wordList) {
    return this
      .clearWords()
      .addWords(wordList);
  }

  nextPage() {
    return this.set('page', this.page + 1);
  }

  prevPage() {
    if (this.page === 0) return this;
    return this.set('page', this.page - 1);
  }

  setSelected(rowIndex) {
    const index = (this.page * this.rowsPerPage) + rowIndex;
    const newList = this.words.update(index, value => value.set('checked', !value.checked));

    return this.set('words', newList);
  }

  setFavorite(rowIndex) {
    const index = (this.page * this.rowsPerPage) + rowIndex;
    const newList = this.words.update(index, value => value.set('favorite', !value.favorite));

    return this.set('words', newList);
  }
}

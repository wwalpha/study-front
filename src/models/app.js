import { Record } from 'immutable';

const AppRecord = Record({
  initCmp: 0,
  visible: false,
  users: [],
  currUser: '',
  checkedUser: -1,
  wordType: '1',
  uploadStatus: '0',
  userProps: {},
  ctgNames: [],
  ctgValues: [],
});

export default class App extends AppRecord {
  setUsers(users) {
    return this.set('users', users);
  }
}

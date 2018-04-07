import { Record, List } from 'immutable';
import User from './User';

const AppRecord = Record({
  initCmp: 0,
  visible: false,
  users: List(),
  currUser: '',
  checkedUser: -1,
  wordType: '1',
  uploadStatus: '0',
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
}

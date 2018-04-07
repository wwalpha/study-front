import { Record, List } from 'immutable';

const UserRecord = Record({
  userName: null,
  ctgNames: List(),
  dayLimit: 0,
  pageOffset: 0,
  type: null,
});

class User extends UserRecord {
  setUserName(name) {
    return this.set('userName', name);
  }

  setUserProps(props) {
    return this
      .set('ctgNames', List(props.ctgNames))
      .set('dayLimit', props.dayLimit)
      .set('pageOffset', props.pageOffset)
      .set('type', props.type);
  }
}

export default User;

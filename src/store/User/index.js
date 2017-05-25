import { observable, computed, action } from 'mobx';
import { searchForAllKeys } from '../../utils/match';

class Users {
  @observable data;
  @observable query = '';

  constructor(users) {
    this.data = users;
  }

  @action('add new user')
  addUser = (user) => {
    this.data.push(user);
  }

  @computed
  get filterUser() {
    const { data, query } = this;

    return searchForAllKeys(data, query);
  }

  @action('search method')
  search = (value) => {
    this.query = value;
  }

  @action('clear search')
  clearSearch = () => {
    this.query = '';
  }

  @action('delete user')
  deleteUser = (id) => {
  	this.data = this.data.filter((user) => {
      return user.id !== id;
    });
  }
}

export default Users;

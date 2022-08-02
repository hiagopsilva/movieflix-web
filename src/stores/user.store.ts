import { action, makeObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { UserAPI } from '~/services/api';

export default class UserStore {
  @persist('object')
  @observable
  payload!: string;

  constructor() {
    makeObservable(this);
  }

  @action
  login = async (
    values: User.Form,
  ): Promise<User.ResponsePayloadType | boolean> => {
    try {
      const response = await UserAPI.login(values);

      if (response?.token) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  };
}

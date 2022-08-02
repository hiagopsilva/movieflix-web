import { isEmpty } from 'lodash';
import { action, makeObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { FilmAPI } from '~/services/api';

export default class FilmStore {
  // @persist('object')
  @observable
  data: any[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  list = async (page: number): Promise<any | null> => {
    try {
      const response = await FilmAPI.list(page);

      if (response) {
        this.data = [...this.data, ...response.docs];

        return response;
      }

      return null;
    } catch (error) {
      return null;
    }
  };
}

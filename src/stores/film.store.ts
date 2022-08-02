import { action, makeObservable, observable } from 'mobx';
import { FilmAPI } from '~/services/api';
import { alert } from '~/utils';

export default class FilmStore {
  @observable
  data: Film.Item[] = [];

  @observable
  total = 0;

  @observable
  limitPages = 0;

  @observable
  page = 1;

  constructor() {
    makeObservable(this);
  }

  @action
  list = async (): Promise<Film.List | null> => {
    try {
      const response = await FilmAPI.list(this.page);

      if (response) {
        this.data = [...this.data, ...response.docs];

        this.total = response.total;
        this.limitPages = response.pages;
        this.page += 1;

        return response;
      }

      return null;
    } catch (error) {
      alert({ message: `Desculpe, ocorreu um erro!`, type: 'error' });
      return null;
    }
  };
}

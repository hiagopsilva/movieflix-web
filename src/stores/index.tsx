import { create } from 'mobx-persist';
import { RouterStore } from 'mobx-react-router';
import FilmStore from './film.store';

class RootStore {
  film: FilmStore;

  constructor() {
    this.film = new FilmStore();
  }
}

const store = new RootStore();

const hydrate = create({
  storage: localStorage,
});

hydrate('film', store.film);

export { RouterStore, FilmStore };
export default store;

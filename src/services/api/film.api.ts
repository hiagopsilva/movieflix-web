import { Request } from '~/services';

export const list = async (page: number): Promise<Film.List | null> => {
  try {
    const { data } = await Request.get(`/list?page=${page}`);

    return data;
  } catch (error) {
    alert({ message: `Desculpe, ocorreu um erro!`, type: 'error' });
    return null;
  }
};

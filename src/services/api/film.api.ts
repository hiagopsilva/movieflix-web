import { Request } from '~/services';
import { handleResponse } from '~/utils/entities';

export const list = async (page: number): Promise<Film.List | null> => {
  try {
    const { data } = await Request.get(`/list?page=${page}`);

    return data;
  } catch (error) {
    handleResponse(error);
    return null;
  }
};

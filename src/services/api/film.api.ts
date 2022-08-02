import { Request } from '~/services';
import { handleResponse } from '~/utils/entities';

export const list = async (): Promise<any | null> => {
  try {
    const { data } = await Request.get('/list');

    return data;
  } catch (error) {
    handleResponse(error);
    return null;
  }
};

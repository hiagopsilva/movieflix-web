import { Request } from '~/services';
import { handleResponse } from '~/utils/entities';

export const login = async (
  credentials: User.Form,
): Promise<User.ResponsePayloadType | undefined> => {
  try {
    const { data } = await Request.post('/login', credentials);
    return data;
  } catch (error) {
    handleResponse(error);
  }
};

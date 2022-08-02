/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { STATUS_CODES, alert } from '~/utils';

const handleResponse = (error: any): void => {
  const codeError = error.response.data.code;
  const message = STATUS_CODES[codeError];

  if (message) {
    alert({ message: `${message}`, type: 'info' });
  }
};

export default handleResponse;

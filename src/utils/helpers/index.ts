/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export * from './theme';
export { default as alert } from './toast';

export const formatName = (fullName: string): string => {
  const name = fullName.trim().split(' ');

  const firstName = name[0];
  const lastName = name[name.length - 1];

  return name.length >= 2 ? `${firstName} ${lastName}` : firstName;
};

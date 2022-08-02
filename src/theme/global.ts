import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Manrope', 'Helvetica', 'sans-serif';
  }

  button {
    cursor: pointer;
  }
`;

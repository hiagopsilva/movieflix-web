import ReactLoading from 'react-loading';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;

  background-color: #000;
  opacity: 0.6;
`;
export const Wrapper = styled(ReactLoading)`
  width: 40px;
  height: 40px;
  color: #ffff;

  margin: auto;
`;

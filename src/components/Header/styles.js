import styled from 'styled-components';

export const Container = styled.div`
  width: 1152px;
  display: flex;
  flex-direction: row;
  background: #fff;
  margin: auto;
  justify-content: center;

  img {
    display: flex;
    margin: 30px auto;
    justify-content: center;
    height: 50px;
  }
`;

export const Form = styled.form`
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  min-width: 650px;
`;

export const SearchButton = styled.button`
  background: #ac53f2;
  border: 0;
  padding: 0 15px;
  height: 50px;
  width: 100px;
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

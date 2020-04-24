import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1152px;
  min-height: 700px;
  background: #fff;
  padding: 30px;
  margin-top: 244px;
  justify-content: center;
  align-items: center;

  img {
    display: flex;
    margin: auto;
    justify-content: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  width: 650px;
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

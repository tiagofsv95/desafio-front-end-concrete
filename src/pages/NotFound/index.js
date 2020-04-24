import React from 'react';
import Header from '../../components/Header/index';
import { Container } from './styles';

export default function NotFound(props) {
  return (
    <>
      <Header props={props} />
      <Container>
        <p>User not found :(</p>
      </Container>
    </>
  );
}

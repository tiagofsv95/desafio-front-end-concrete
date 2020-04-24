import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SearchButton } from './styles';
import logo from '../../assets/image/GithubSearch.svg';

export default function Main({ history }) {
  const [newUser, setNewUser] = useState('');

  async function handleSearch(e) {
    e.preventDefault();
    try {
      const response = await api.get(`/users/${newUser}`);

      history.push('/result', [response.data]);
    } catch (err) {
      history.push('/notFound');
    }
  }

  return (
    <Container>
      <img src={logo} alt="Github Search" />

      <Form>
        <input
          style={{
            flex: 1,
            border: `1px solid`,
            fontSize: 30,
          }}
          type="text"
          placeholder=""
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
        />

        <SearchButton onClick={e => handleSearch(e)}>
          <FaSearch color="#FFF" size={30} />
        </SearchButton>
      </Form>
    </Container>
  );
}

import React, { useEffect, useState } from 'react';
import {
  FaBuilding,
  FaGlobe,
  FaStar,
  FaUserFriends,
  FaBoxOpen,
} from 'react-icons/fa';
import Header from '../../components/Header/index';

import {
  Container,
  Perfil,
  PerfilInfo,
  PerfilName,
  PerfilLogin,
  PerfilCompany,
  PerfilLocation,
  PerfilFollowing,
  PerfilRepos,
  PerfilStars,
  Repository,
  RepositoryTitle,
  RepositoryDescription,
  RepositoryStar,
} from './styles';

import api from '../../services/api';

export default function Result(props) {
  const { location } = props;
  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const userData = location.state[0];
      const response = await api.get(`/users/${location.state[0].login}/repos`);

      setUser(userData);

      const repository = response.data.sort(
        (a, b) =>
          parseInt(b.stargazers_count, 10) - parseInt(a.stargazers_count, 10)
      );

      setRepositories(repository);
    }
    fecthData();
  }, []);

  return (
    <>
      <Header props={props} />
      <Container>
        <Perfil>
          <img src={user.avatar_url} alt="user_avatar" />
          <PerfilInfo>
            <PerfilName>{user.name}</PerfilName>
            <PerfilLogin>{user.login}</PerfilLogin>
            <PerfilCompany>
              <div>
                <FaBuilding size={20} color="#5c5c5c" />
                <p>{user.company || ' '}</p>
              </div>
            </PerfilCompany>
            <PerfilLocation>
              <div>
                <FaGlobe size={20} color="#5c5c5c" />
                <p>{user.location}</p>
              </div>
            </PerfilLocation>
            <PerfilFollowing>
              <div>
                <FaUserFriends size={20} color="#5c5c5c" />
                <p>{user.following}</p>
              </div>
            </PerfilFollowing>
            <PerfilRepos>
              <div>
                <FaBoxOpen size={20} color="#5c5c5c" />
                <p>{user.public_repos}</p>
              </div>
            </PerfilRepos>
            <PerfilStars>
              <div>
                <FaStar size={20} color="#5c5c5c" />
                <p>{user.public_gists}</p>
              </div>
            </PerfilStars>
          </PerfilInfo>
        </Perfil>

        <ul>
          {repositories.map(repository => (
            <Repository key={repository.id}>
              <div>
                <RepositoryTitle>{repository.name}</RepositoryTitle>
                <RepositoryDescription>
                  {repository.description}
                </RepositoryDescription>
                <RepositoryStar>
                  <div>
                    <FaStar size={25} color="#5c5c5c" />
                    <p>{repository.stargazers_count}</p>
                  </div>
                </RepositoryStar>
              </div>
            </Repository>
          ))}
        </ul>
      </Container>
    </>
  );
}

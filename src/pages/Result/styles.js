import styled from 'styled-components';

export const Container = styled.div`
  width: 1152px;
  display: flex;
  flex-direction: row;
  margin: auto;
  background: #fff;
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  margin: 30px;
  align-items: center;

  img {
    height: 280px;
    width: 280px;
    justify-content: center;
  }
`;

export const PerfilInfo = styled.div``;

export const PerfilName = styled.p`
  margin-top: 12px;
  font-size: 35px;
  font-weight: 300;
  color: #000000;
`;

export const PerfilLogin = styled.p`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 300;
  color: #5c5c5c;
`;

export const PerfilCompany = styled.div`
  div {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    p {
      margin-left: 5px;
      font-size: 20px;
      font-weight: 300;
      color: #5c5c5c;
    }
  }
`;

export const PerfilLocation = styled.div`
  div {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    p {
      margin-left: 5px;
      font-size: 20px;
      font-weight: 300;
      color: #5c5c5c;
    }
  }
`;

export const PerfilFollowers = styled.div`
  div {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    p {
      margin-left: 5px;
      font-size: 20px;
      font-weight: 300;
      color: #5c5c5c;
    }
  }
`;

export const PerfilFollowing = styled.div`
  div {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    p {
      margin-left: 5px;
      font-size: 20px;
      font-weight: 300;
      color: #5c5c5c;
    }
  }
`;

export const PerfilRepos = styled.div`
  div {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    p {
      margin-left: 5px;
      font-size: 20px;
      font-weight: 300;
      color: #5c5c5c;
    }
  }
`;

export const PerfilStars = styled.div`
  div {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    p {
      margin-left: 5px;
      font-size: 20px;
      font-weight: 300;
      color: #5c5c5c;
    }
  }
`;

export const Repository = styled.div`
  margin: 20px auto;
  padding: 1em;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const RepositoryTitle = styled.div`
  color: #ac53f2;
  font-size: 35px;
`;

export const RepositoryDescription = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #000;
`;

export const RepositoryStar = styled.div`
  div {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    p {
      margin-left: 5px;
      font-size: 20px;
      font-weight: 300;
      color: #5c5c5c;
    }
  }
`;

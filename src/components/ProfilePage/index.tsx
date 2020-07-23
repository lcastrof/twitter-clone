import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Lucas de Castro</h1>
        <h2>@lcastrof</h2>

        <p>
          FullStack Developer. Github:
          <a href="https://github.com/lcastrof"> @lcastrof</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Juiz de Fora, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 02 de Julho de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo
            <strong> 94</strong>
          </span>
          <span>
            <strong>257 </strong>
            seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;

import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Higor Melo" nickname="@higormeloo" />,
              <FollowSuggestion name="Lucas Vasques" nickname="@vasquesl" />,
              <FollowSuggestion name="Gabriel Rosa" nickname="@gabitorosa" />,
            ]}
          />
          <List title="News" elements={[<News />, <News />, <News />]} />
          <List title="News" elements={[<News />, <News />, <News />]} />
          <List title="News" elements={[<News />, <News />, <News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;

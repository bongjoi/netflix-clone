import React from 'react';
import * as ROUTES from '../constants/route';
import { Header } from '../components';
import logo from '../logo.svg';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Wrapper>
        <Header.Logo to={ROUTES.HOME} alt="넷플릭스 홈으로" src={logo} />
        <Header.Button to={ROUTES.SIGN_IN}>로그인</Header.Button>
      </Header.Wrapper>
    </Header>
  );
}

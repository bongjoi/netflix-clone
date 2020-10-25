import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Logo, ButtonLink } from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Wrapper = function headerWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

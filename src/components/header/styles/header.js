import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
  max-width: 1920px;
  height: 5rem;
  z-index: 1;

  a {
    display: flex;
  }

  @media screen and (max-width: 1449px) {
    height: 4rem;
  }

  @media screen and (max-width: 1000px) {
    height: 45px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 3.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 1000px) {
    margin: 0 45px;
  }

  @media screen and (max-width: 600px) {
    margin: 0 5%;
  }
`;

export const Logo = styled.img`
  height: 45px;

  @media screen and (max-width: 1449px) {
    height: 36px;
  }

  @media screen and (max-width: 1000px) {
    height: 32px;
  }

  @media screen and (max-width: 600px) {
    height: 24px;
  }
`;

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  display: block;
  font-size: 1.1rem;
  color: white;
  text-decoration: none;
  background: #e50914;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  cursor: poninter;

  &:hover {
    background: #f40612;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.6rem;
  }
`;

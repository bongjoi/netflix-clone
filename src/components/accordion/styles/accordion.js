import styled, { keyframes, css } from 'styled-components/macro';

export const Container = styled.div`
  padding: 70px 45px;
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  margin: 0 auto 1.5em;
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 815px;

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 50px;
  color: white;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Item = styled.div`
  margin-bottom: 10px;
  color: white;

  &:first-of-type {
    margin-top: 3em;
  }

  @media screen and (max-width: 600px) {
    &:first-of-type {
      margin-top: 2em;
    }
  }
`;

export const Header = styled.div`
  margin-bottom: 1px;
  padding: 0.8em 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  user-select: none;
  cursor: pointer;

  img {
    margin-left: 30px;
    filter: brightness(0) invert(1);
    width: 24px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;

    img {
      width: 16px;
    }
  }
`;

const toggleBox = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1200px;
  }
`;

export const Body = styled.div`
  padding: 1.2em 2.2em 1.2em 1.2em;
  font-size: 26px;
  font-weight: normal;
  line-height: 1.4;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  ${(props) =>
    props.active &&
    css`
      animation: ${toggleBox} 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    `}

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

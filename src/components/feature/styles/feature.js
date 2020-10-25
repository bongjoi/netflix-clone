import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  padding: 70px 45px;
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;

  @media screen and (max-width: 600px) {
    padding: 50px 5%;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: -70px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0.8) 100%
  );

  @media screen and (max-width: 600px) {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      background-image: linear-gradient(to bottom, #000 25%, rgba(0, 0, 0, 0));
    }
  }
`;

export const Text = styled.div`
  margin: 0 auto;
  padding: 75px 0;
  position: relative;
  max-width: 950px;
  text-align: center;
  word-break: keep-all;
  z-index: 1;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;

export const Title = styled.h1`
  margin: 0 auto;
  max-width: 800px;
  font-size: 4rem;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 1499px) {
    max-width: 650px;
    font-size: 3.125rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

export const SubTitle = styled.h2`
  margin: 1rem auto;
  max-width: 800px;
  font-size: 1.625rem;
  font-weight: normal;
  color: white;

  @media screen and (max-width: 1499px) {
    max-width: 650px;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.125rem;
  }
`;

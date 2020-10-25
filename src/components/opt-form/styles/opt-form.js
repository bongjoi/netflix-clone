import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 0.85rem;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 950px;
  word-break: keep-all;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h3`
  margin: 0 auto;
  padding: 0 5%;
  padding-bottom: 20px;
  max-width: none;
  font-size: 1.2rem;
  font-weight: normal;
  color: white;
  text-align: center;

  @media screen and (max-width: 1000px) {
    padding: 0 10%;
    max-width: 650px;
    font-size: 23px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 5%;
    max-width: 450px;
    font-size: 18px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 500px;
  height: 70px;
  border: 0;
  box-sizing: border-box;

  @media screen and (max-width: 1449px) {
    max-width: 450px;
    height: 60px;
  }

  @media screen and (max-width: 1000px) {
    margin: 1rem auto 10px;
  }

  @media screen and (max-width: 600px) {
    height: 48px;
  }
`;

export const Button = styled.button`
  padding: 0 26px;
  display: flex;
  align-items: center;
  height: 70px;
  font-size: 26px;
  color: white;
  text-transform: uppercase;
  background: #e50914;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  img {
    margin-left: 10px;
    width: 24px;
    filter: brightness(0) invert(1);
  }

  @media screen and (max-width: 1449px) {
    height: 60px;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 10px;
    height: 40px;
    font-size: 1rem;

    img {
      width: 16px;
    }
  }
`;

export const Text = styled.h3`
  margin-top: 1.2rem;
  font-size: 1.2rem;
  font-weight: normal;
  color: white;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.p`
  padding: 0 5%;
  font-size: 20px;
  color: white;
  text-align: center;

  @media screen and (max-width: 1000px) {
    padding: 0 10%;
    max-width: 450px;
    font-size: 23px;
  }

  @media screen and (max-width: 600px) {
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
  max-width: 450px;
  height: 60px;
  border: 0;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    max-width: 500px;
  }

  @media screen and (max-width: 600px) {
    height: 48px;
  }
`;

export const Button = styled.button`
  padding: 0 26px;
  display: flex;
  align-items: center;
  height: 60px;
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

  @media screen and (max-width: 1000px) {
    margin-top: 20px;
    height: 40px;
    font-size: 16px;
    font-weight: bold;

    img {
      width: 16px;
    }
  }
`;

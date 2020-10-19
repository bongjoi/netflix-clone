import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: auto;
  padding: 70px 56px;
  display: flex;
  flex-direction: column;
  max-width: 1000px;

  @media screen and (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  margin-bottom: 20px;
  font-size: 13px;
  color: #757575;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;

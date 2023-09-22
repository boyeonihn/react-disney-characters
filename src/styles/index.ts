import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CharactersList = styled.ul`
  display: grid;
  padding: 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  
`;

export const Header = styled.header`
  font-family: 'Berkshire Swash', cursive;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 5rem;
`;

export const ButtonWrapper = styled(Container)`
  flex-direction: row;
  margin: 20px 0px;
`;
export const Button = styled.button`
  border: none;
  margin: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  background-color: #60a3bc;
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
  a {
    color: inherit;
  }
`;

export const CharacterWrapper = styled(Container)`
  align-items: center;
  padding: 20px;
`;

export const MoviesList = styled.ul`
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 20px;
  li {
    list-style: none;
  }
  &:hover {
    Button {
      cursor: default;
    }
  }
`;

export const MovieList = styled(Button)`
  font-size: 1.25rem;
  background-color: #079992;
  &:hover {
    font-family: 'Berkshire Swash', cursive;
    font-size: 1.5rem;
    color: #82ccdd;
  }
`;

export const Subheading = styled.h3`
  font-size: 2rem;
  margin: 20px;
`;

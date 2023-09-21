import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
}
const Header = styled.header`
  font-family: 'Berkshire Swash', cursive;
  background-color: 'white';
  height: 200px;
  border: 5px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 5rem;
`;

export default function HeaderComponent({ title }: HeaderProps) {
  return (
    <Header>
      <Link to="/">
        <Title>{title} 💫</Title>
      </Link>
    </Header>
  );
}

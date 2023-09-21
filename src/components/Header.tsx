import styled from 'styled-components';

interface HeaderProps {
  title: string;
}
const Header = styled.header`
  background-color: 'white';
  height: 200px;
  border: 5px solid red;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
`;

export default function HeaderComponent({ title }: HeaderProps) {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
}

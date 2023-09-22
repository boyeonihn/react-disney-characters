import { Link } from 'react-router-dom';
import { Header, Title } from '../styles';

interface HeaderProps {
  title: string;
}

export default function HeaderComponent({ title }: HeaderProps) {
  return (
    <Header>
      <Link to="/">
        <Title>{title} 💫</Title>
      </Link>
    </Header>
  );
}

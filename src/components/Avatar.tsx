import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CharacterInterface } from '../routes';

const AvatarPic = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 120px;
  height: 120px;
  vertical-align: middle;
`;

export default function Avatar({ id, name, imageUrl }: CharacterInterface) {
  return (
    <div>
      <Link to={String(id)}>
        <AvatarPic src={imageUrl || ''} alt={`Picture of ${name}`} />
        <h3>{name}</h3>
      </Link>
    </div>
  );
}

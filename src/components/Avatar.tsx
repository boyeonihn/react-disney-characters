import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CharacterInterface } from '../routes';

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  border: 1px solid gold;
  background-color: gold;
`;

export const AvatarPic = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 150px;
  height: 150px;
  vertical-align: middle;
`;

const AvatarName = styled.h3`
  color: ${(props) => props.theme.accentColor};
`;

export default function Avatar({ id, name, imageUrl }: CharacterInterface) {
  return (
    <div>
      <Link to={`/character/${String(id)}`} state={{ name }}>
        <AvatarContainer>
          <AvatarPic src={imageUrl || ''} alt={`Picture of ${name}`} />
          <AvatarName>{name}</AvatarName>
        </AvatarContainer>
      </Link>
    </div>
  );
}

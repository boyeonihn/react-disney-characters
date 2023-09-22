import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CharacterInterface } from '../routes';

const AvatarContainer = styled.div`
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  &:hover {
    background-color: #4a69bd;
    img {
      height: 180px;
      width: 180px;
    }
  }
`;

export const AvatarPic = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 150px;
  height: 150px;
  vertical-align: middle;
  transition: all 0.1s ease-in;
`;

const AvatarName = styled.h3`
  color: ${(props) => props.theme.textColor};
  margin-top: 10px;
  font-size: 1.25rem;
  font-weight: normal;
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

import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CharacterInterface } from '.';
import { Header } from '../components';
import { AvatarPic } from '../components/Avatar';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterInterface>();
  const [loading, setLoading] = useState(true);

  const {
    state: { name },
  } = useLocation();

  console.log('### location', { location });

  const loadCharacter = async () => {
    const res = await fetch(
      `https://disney_api.nomadcoders.workers.dev/characters/${id}`
    );
    const json = await res.json();
    console.log('#### json', { json });
    setCharacter(json);
  };

  useEffect(() => {
    loadCharacter();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        'LOADING... '
      ) : (
        <Container>
          <Header title={name || 'loading...'} />
          <AvatarPic src={character?.imageUrl} />
        </Container>
      )}
    </div>
  );
};

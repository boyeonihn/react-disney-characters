import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Header, Avatar } from '../components';

export interface CharacterInterface {
  id: number;
  name: string;
  imageUrl: string;
  sourceUrl?: string;
  films?: string[];
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CharactersList = styled.ul`
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Characters = () => {
  const [characters, setCharacters] = useState<CharacterInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCharacters = async () => {
    const res = await fetch(
      'https://disney_api.nomadcoders.workers.dev/characters'
    );
    const json = await res.json();
    setCharacters(json);
  };

  useEffect(() => {
    loadCharacters();
    setLoading(false);
  }, []);

  return (
    <Container>
      <Header title={'Disney Characters'} />
      <CharactersList>
        {loading
          ? 'still loading... '
          : characters.map((character) => (
              <Avatar
                id={character.id}
                key={character.id}
                name={character.name}
                imageUrl={character.imageUrl}
              />
            ))}
      </CharactersList>
    </Container>
  );
};

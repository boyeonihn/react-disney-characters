import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api';
import { Header, Avatar } from '../components';

export interface CharacterInterface {
  id: number;
  name: string;
  imageUrl: string;
  sourceUrl?: string;
  films?: string[];
}

export const Characters = () => {
  const { isLoading, data } = useQuery<CharacterInterface[]>(
    ['allCharacters'],
    fetchCharacters
  );

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

import { useLocation, useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { CharacterInterface } from '.';
import { Header, AvatarPic } from '../components';
import {
  Subheading,
  Container,
  Button,
  ButtonWrapper,
  CharacterWrapper,
  MoviesList,
  MovieList,
} from '../styles';
import { fetchCharacter } from '../api';

export const Character = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery<CharacterInterface>(
    ['characterId', id],
    () => {
      return fetchCharacter(id!);
    }
  );

  const {
    state: { name },
  } = useLocation();

  return (
    <div>
      {isLoading ? (
        'LOADING... '
      ) : (
        <Container>
          <Header title={name ? name : isLoading ? 'Loading...' : data?.name} />
          <ButtonWrapper>
            <Button>
              <Link to="/"> &larr; Back home! </Link>
            </Button>
            <Button>
              <a href={data?.sourceUrl}>More info</a>
            </Button>
          </ButtonWrapper>
          <CharacterWrapper>
            <AvatarPic src={data?.imageUrl} />
            <Subheading>Appearances in:</Subheading>
            <MoviesList>
              {data?.films?.map((film) => (
                <MovieList key={film}>#{film}</MovieList>
              ))}
            </MoviesList>
          </CharacterWrapper>
        </Container>
      )}
    </div>
  );
};

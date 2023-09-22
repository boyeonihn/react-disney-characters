import { useLocation, useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
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
  const { isLoading, data } = useQuery<CharacterInterface>(
    ['characterId', id],
    () => {
      return fetchCharacter(id!);
    }
  );

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
      {isLoading ? (
        'LOADING... '
      ) : (
        <Container>
          <Header title={name ? name : isLoading ? 'Loading...' : data?.name} />
        </Container>
      )}
    </div>
  );
};

import { useParams } from 'react-router-dom';

export const Character = () => {
  const { id } = useParams();

  console.log(id);
  return <h1>Character: {id}</h1>;
};

import { useParams } from 'react-router-dom';

export default function Home() {
  const { name } = useParams();
  return (
    <>
      <h1>Home page</h1>
      <p>This is the home page!</p>
      <p>Hello {name ?? 'World'}</p>
    </>
  );
}

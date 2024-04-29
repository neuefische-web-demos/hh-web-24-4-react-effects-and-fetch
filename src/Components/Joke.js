import { useState, useEffect } from "react";

export default function Joke() {
  const [page, setPage] = useState(1);
  const [joke, setJoke] = useState();

  useEffect(() => {}, []);

  useEffect(() => {
    async function fetchJoke() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${page}`
      );
      const data = await response.json();
      console.log(data);
      setJoke(data);
    }

    fetchJoke();
  }, [page]);

  if (!joke) {
    return <>loading..</>;
  }

  return (
    <>
      <h1>Effects and Fetch</h1>
      <h2>Hier der Joke: {joke.joke}</h2>

      <h2>Page: {page}</h2>
      <button
        onClick={() => {
          setPage(joke.prevId);
        }}
      >
        Prev Page
      </button>
      <button
        onClick={() => {
          setPage(joke.nextId);
        }}
      >
        Next Page
      </button>
    </>
  );
}

import React from 'react';

export default function About() {
  const authors = [
    { id: 1, name: 'Eric' },
    { id: 2, name: 'Joe' },
    { id: 3, name: 'Bob' }
  ];
  return (
    <>
      <h1>About page</h1>
      <p>This is the About page. And here are the authors:</p>
      <ul>
        {authors.map(author => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </>
  );
}

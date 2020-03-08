import React, { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    getData();
  }, []);

  const [ quote, setQuote ] = useState();

  const getData = async () => {
    let chuckJokes = await fetch(`https://api.chucknorris.io/jokes/random`);
    let data = await chuckJokes.json();
    setQuote(data.value);
  }

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <p>{ quote }</p>
      <button onClick={ getData }>Get Joke</button>
    </div>
  );
};

export default App;

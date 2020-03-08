import React, { useEffect, useState } from 'react';

const Page1 = () => {

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
      <button onClick={ getData }>Get Joke</button>
      <p>{ quote }</p>
    </div>

  );
};

export default Page1;
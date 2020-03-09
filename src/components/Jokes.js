import React, { useEffect, useState } from 'react';
import '../styles/components/jokes.css';

const Jokes = () => {
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
    <section className="container-joke">
      <button className="button-jokes" onClick={ getData }>Get Joke</button>
      <div className="content-joke">
        <blockquote className="text-jokes">{ quote }</blockquote>
      </div>  
    </section>    
  );
};

export default Jokes;

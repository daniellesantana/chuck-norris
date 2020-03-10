import React, { useState, useEffect } from 'react';

import icon from '../assets/chuck.ico';
import '../styles/components/category.css';

const Category = () => {

  const [ category, setCategory ] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
    response
      .json(true)
      .then(response => setCategory(response))
  }

  return (
    <nav>
      <figure className="chuck-icon">
        <img src={ icon } alt="chuck norris icon" height="60" width="60" />
      </figure>
      <ul className="list"> Category
        {category.map(categ => {
          return(
            <li cla>{ categ }</li>
          )
        })}
      </ul>  
    </nav>    
  );
}

export default Category;
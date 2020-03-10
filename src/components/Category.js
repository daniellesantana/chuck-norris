import React, { useState, useEffect } from 'react';

const Category = () => {

  useEffect(() => {
    getData();
  }, []);

  const [ category, setCategory ] = useState([]);

  async function getData() {
    const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
    response
      .json()
      .then(response => setCategory(response))
  }

  return (
    <div>
      <button onClick={ getData }>Category</button>
      <ul>
        {category.map(categ => {
          return(
            <li>{ categ }</li>
          )
        })}
      </ul>  
    </div>    
  );
}

export default Category;
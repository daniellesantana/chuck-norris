import React from 'react';

import chuck from '../assets/chuck.png';
import '../styles/components/backgroundImg.css';

const BackgroundImg = () => {
  return(
    <figure className="figure">
      <div className="content-figure">
        <img className="img-chuck" alt="cartoon chuck norris holding two guns" src={ chuck } />
      </div>
    </figure>
  )
}


export default BackgroundImg;
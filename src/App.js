import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import BackgroundImg from './components/BackgroundImg';
import Jokes from './components/Jokes';
import Category from './components/Category';

import './styles/global.css';
import './styles/components/app.css';

const App = () => {
  return(
    <>
    <Header />
      <Layout>
        <Category />
        <Jokes /> 
      </Layout>
      <BackgroundImg />
    </>
  )
};

export default App;

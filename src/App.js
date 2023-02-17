import React from 'react';
import './App.css';
import tmdbAPI, { getMoviesLists } from './tmdbAPI';
import Banner from './components/Banner'
import Row from './components/Row'

function App()
{
  return (
    <div className="App">

      <Banner />

      { tmdbAPI.map(
        ( cat, index ) =>
        {
          return <Row
            title={ cat.title }
            path={ cat.path }
            isLarge={ cat.isLarge } />
        }
      ) }

    </div>
  );
}

export default App;

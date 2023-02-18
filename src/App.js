import React from 'react';
import './App.css';
import tmdbAPI, { getMoviesLists } from './tmdbAPI';
import Banner from './components/Banner'
import Row from './components/Row'
import Header from './components/Header';

function App()
{
  return (
    <div className="App">

      <Header />

      <Banner />

      { tmdbAPI.map(
        ( cat, index ) =>
        {
          return <Row
            key={ cat.name }
            title={ cat.title }
            path={ cat.path }
            isLarge={ cat.isLarge } />
        }
      ) }



      <footer>
        <p>Site criado pelo <a href='https://gabrielmjacques.github.io/portfolio' target={ '_blank' }>Edson Gabriel</a> para estudo da biblioteca ReactJS</p>

        <br />

        <p>Informações sobre filmes e séries contidas neste site foram utilizadas através do consumo da API <a href='https://www.themoviedb.org/?language=pt-BR' target={ '_blank' }>themoviedatabase</a></p>
      </footer>
    </div>
  );
}

export default App;

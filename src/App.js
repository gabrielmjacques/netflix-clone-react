import './App.css';
import tmdbAPI, { getMoviesLists } from './tmdbAPI';
import Row from './components/Row'

function App()
{
  return (
    <div className="App">

      { tmdbAPI.map(
        ( cat, index ) =>
        {
          return <Row name={ cat.name } path={ cat.path } />
        }
      ) }

    </div>
  );
}

export default App;

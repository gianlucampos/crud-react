import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MusicaCad } from './components/MusicaCad';
import { MusicaFilter } from './components/MusicaFilter';
import './styles/global.css';

function App() {
  const basename = process.env.NODE_ENV === 'development' ?
    '' : process.env.PUBLIC_URL;
  return (
    <div className="pageContainer">
      <Header />
      <div className="contentWrap">
        <Router basename={basename}>
          <Switch>
            <Route exact path={["/", "/musicas"]} component={MusicaFilter} />
            <Route path="/musicas/create" component={MusicaCad} />
            <Route path="/musicas/edit/:id" component={MusicaCad} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

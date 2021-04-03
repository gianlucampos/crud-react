import { HashRouter as Router } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MusicaFilter } from './components/MusicaFilter';
import './styles/global.css';

function App() {
  return (
    <div className="pageContainer">
      <Header />
      <div className="contentWrap">
        <Router basename={process.env.PUBLIC_URL}>
          <MusicaFilter />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { HashRouter as Router } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './styles/global.css';

function App() {
  return (
    <div className="pageContainer">
      <div className="contentWrap">
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

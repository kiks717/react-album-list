import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Album from './pages/Album/Album';
function App() {

  return (
    <div className="App">
      <Link to='/'><Header/></Link>
      <Album />
    </div>
  );
}

export default App
import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        <button>
          <Link to="/users">user page</Link>
        </button>
        <button>
          <Link to="/admins">admin page</Link>
        </button>
      </div>
    </div>
  );
}

export default App;

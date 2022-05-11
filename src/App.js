import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './routes/Routers';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router >
      <Routers />
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './container/Router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import "../src/scss/app.scss";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Router />
    </BrowserRouter>

  </div>
  );
}

export default App;

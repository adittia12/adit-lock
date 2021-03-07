import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/about" component={ AboutPage } />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
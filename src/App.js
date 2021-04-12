import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import HomePage from "./pages/HomePage";
import CatPage from "./pages/CatPage";
import DogPage from "./pages/DogPage";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dogs" component={DogPage} />
        <Route path="/cats" component={CatPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;

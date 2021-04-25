import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import HomePage from "./pages/HomePage";
import CatPage from "./pages/CatPage";
import DogPage from "./pages/DogPage";
import CatFactsPage from "./pages/CatFactsPage";
import FoxPicPage from "./pages/FoxPicPage";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dogPic" component={DogPage} />
        <Route path="/catPic" component={CatPage} />
        <Route path="/foxPic" component={FoxPicPage} />
        <Route path="/catFacts" component={CatFactsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;

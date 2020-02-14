import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamHome from './Components/Team/TeamHome';
import SearchHome from './Components/Search/SearchHome';
import TopNav from './Components/Layout/TopNav';
import './index.css'

function App() {
  return (
    <div className="App">  
      <Router>
        <TopNav />
        <Switch>
          <Route exact path="/" component={TeamHome} />
          <Route exact path="/search" component={SearchHome} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

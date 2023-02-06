import React from 'react';
import axios from 'axios';
import './App.css';
//more imports
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
//import routes
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <div>
        <Router>
          <div>
            {/* feeling/page one */}
            <Route exact path="/">
              <Feeling />
            </Route>
            <Route exact path="/understanding">
              <Understanding />
            </Route>
            <Route exact path="/support">
              <Support />
            </Route>
            <Route exact path="/comments">
              <Comments />
            </Route>
            <Route exact path="/review">
              <Review />
            </Route>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

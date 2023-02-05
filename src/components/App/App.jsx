import React from 'react';
import axios from 'axios';
import './App.css';
//more imports
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  //get server info on page load
  useEffect(() => {
    console.log('in useEffect');
    getFeedback();
  }, [])

  const dispatch = useDispatch();

  // getFeedback
  const getFeedback = () => {
    axios.get('/feedback')
      .then(response => {
        console.log('response', response.data);
        dispatch({type: 'GET_FEEDBACK', payload: response.data});
      })
  };

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
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

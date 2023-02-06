// final page similar to "bookForm". Will display all input values and post those to server on click.
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FeedbackItem from './FeedbackItem';


function Review() {
    const history = useHistory();

    //get server info on page load
    useEffect(() => {
        console.log('in useEffect');
        getFeedback();
    }, []);

    const dispatch = useDispatch();

    // getFeedback
    const getFeedback = () => {
        axios.get('/feedback')
          .then(response => {
            console.log('response', response.data);
            dispatch({type: 'SET_FEEDBACK_ITEM', payload: response.data});
          })
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newFeedback = {feeling, understanding, support, comments};
        console.log(`adding feedback`, newFeedback);
        
        axios.post('/feedback', newFeedback)
        .then(response => {
            console.log('great post great success', response);
            getFeedback();
        })
        history.push('/finished');
    }

    return (
        <div>
             <FeedbackItem getFeedback={getFeedback}/>
            <button onClick={handleSubmit} className="button">Submit</button>

        </div>
    );
};


export default Review;
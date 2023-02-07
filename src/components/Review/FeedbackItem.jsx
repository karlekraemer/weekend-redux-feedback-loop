import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function FeedbackItem() {
    const feedbackResult = useSelector(store => store.feedbackResult);
    const history = useHistory(); // useHistory


    // getFeedback
    const getFeedback = () => {
        axios.get('/feedback')
            .then(response => {
                console.log('response', response.data);
                newFeedbackResult(response.data);
            })
            .catch((error) => {
                console.log('error', error)
            })
    };

    // handleSubmit function that sends stored data to server
    const handleSubmit = event => {
        event.preventDefault();
        console.log(`adding feedback`, feedbackResult);

        axios.post('/feedback', feedbackResult)
            .then(response => {
                console.log('great post great success', response);
                getFeedback();
            })
            history.push('/finished');
    }

    return (
        <section>
            <h2>Submit Feedback</h2>
            <form className="add-feedback-form">
                <input
                    required
                    placeholder="Feedback Result"
                    value={feedbackResult}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <button onClick={handleSubmit} type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default FeedbackItem;
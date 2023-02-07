// final page similar to "bookForm". Will display all input values and post those to server on click.
import { useSelector } from 'react-redux';
import FeedbackItem from './FeedbackItem';

function Review() {
    const feedbackResult = useSelector(store => store.feedbackResult);


    return (
    <div>
        <section>
            <h2> IS THIS THING ON </h2>
            <ul>
                {feedbackResult.map((feedback, i) => (
                    <li key={i}>{feedback}</li>
                ))}
            </ul>
        </section>
        <FeedbackItem />
     </div>
    );
};


export default Review;
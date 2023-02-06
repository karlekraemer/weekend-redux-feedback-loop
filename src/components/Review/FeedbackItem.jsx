import { useSelector } from 'react-redux';

function FeedbackItem() {
    const feedbackItem = useSelector(store => store.feedbackItem);

    return (
        <section>
            <h2> IS THIS THING ON </h2>
            <ul>
                {feedbackItem.map((feedback, index) =>
                    <li key={index}>{feedback.feeling} {feedback.understanding} {feedback.support} {feedback.comments}</li>
                )}
            </ul>
        </section>
    );
}

export default FeedbackItem;
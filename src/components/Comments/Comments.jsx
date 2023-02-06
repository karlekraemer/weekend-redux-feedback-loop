// Step Four and does not need to be filled to continue
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Comments = () => {
    // use history
    const history = useHistory();
    //use selector and dispatch
    const comments = useSelector(store => store.comments); 
    const dispatch = useDispatch();

    // handleChange
    const handleChange = (event) => {
        //pass data to the reducer
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }


    // make an onClick function to simplify return code?

    return (
        <>
            <h2>Additional Comments?</h2>
            <div>
                <input value={comments} onChange={handleChange} className="input" type="text" />
                <button onClick={() => history.push('/review')} className="button">Submit</button>
            </div>
        </>
    )
}

export default Comments;
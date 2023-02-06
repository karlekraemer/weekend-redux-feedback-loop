// Step three
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Support = () => {
    // use history
    const history = useHistory();
    //use selector and dispatch
    const support = useSelector(store => store.support); 
    const dispatch = useDispatch();

    // handleChange
    const handleChange = (event) => {
        //pass data to the reducer
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }


    // make an onClick function to simplify return code?

    return (
        <>
            <h2>How supported do you feel?</h2>
            <div>
                <input value={support} onChange={handleChange} className="input" type="text" />
                <button onClick={() => history.push('/comments')} className="button">Submit</button>
            </div>
        </>
    )
}

export default Support;
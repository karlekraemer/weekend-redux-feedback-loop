// Step one
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Feeling = () => {
    // use history
    const history = useHistory();
    //use selector and dispatch
    const feeling = useSelector(store => store.feeling); 
    const dispatch = useDispatch();

    // handleChange
    const handleChange = (event) => {
        //pass data to the reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    }


    // make an onClick function to simplify return code?

    return (
        <>
            <h2>How are your feels</h2>
            <div>
                <input value={feeling} onChange={handleChange} className="input" type="text" />
                <button onClick={() => history.push('/understanding')} className="button">Submit</button>
            </div>
        </>
    )
}


export default Feeling;
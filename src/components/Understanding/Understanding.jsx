// Step two
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Understanding = () => {
    // use history
    const history = useHistory();
    //use selector and dispatch
    const understanding = useSelector(store => store.understanding); 
    const dispatch = useDispatch();

    // handleChange
    const handleChange = (event) => {
        //pass data to the reducer
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
    }


    // make an onClick function to simplify return code?

    return (
        <>
            <h2>Understanding Levels</h2>
            <div>
                <input value={understanding} onChange={handleChange} className="input" type="text" />
                <button onClick={() => history.push('/support')} className="button">Submit</button>
            </div>
        </>
    )
}


export default Understanding;


// export default Understanding;
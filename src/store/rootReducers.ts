import { combineReducers } from "redux";
import counterReducers from '@store/counters/Slice'
const rootReducer = combineReducers(
    {
        counter: counterReducers,
    })

export default rootReducer
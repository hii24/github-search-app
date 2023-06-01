import { combineReducers } from 'redux';
import searchReducer from '../slices/searchSlice';
import historyReducer from '../slices/historySlice';

const rootReducer = combineReducers({
    search: searchReducer,
    history: historyReducer,
});

export default rootReducer;

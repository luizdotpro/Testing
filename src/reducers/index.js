import { combineReducers } from 'redux';
import reducerComments from './comments';
import reducerTitle from './title';

export default combineReducers({
    comment: reducerComments,
    title: reducerTitle
});
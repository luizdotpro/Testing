import { combineReducers } from 'redux';
import reducerComments from './comments';
import reducerTitle from './title';
import authReducer from './auth'

export default combineReducers({
    comment: reducerComments,
    title: reducerTitle,
    auth: authReducer
});
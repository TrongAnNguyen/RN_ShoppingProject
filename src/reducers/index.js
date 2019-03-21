import { combineReducers } from 'redux';
import product from './product';
import user from './user';
import screen from './screen';

const rootReducer = combineReducers({
    product,
    user,
    screen
});

export default rootReducer;

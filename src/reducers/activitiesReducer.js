import { FETCH_ACTIVITIES } from '../actions/types';

export default (state = null, action) => {
    switch(action.type){
        case FETCH_ACTIVITIES:
            return action.payload;
        default:
            return state;
    }
}
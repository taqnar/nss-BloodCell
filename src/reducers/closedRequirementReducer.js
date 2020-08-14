import { FETCH_CLOSED_REQUIREMENTS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_CLOSED_REQUIREMENTS:
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
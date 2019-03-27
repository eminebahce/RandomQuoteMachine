import {Quotes_FETCHED} from '../actions/quotepage';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case Quotes_FETCHED:
            return action.payload.quotes;
        default:
            return state;
    }
}

export default reducer;
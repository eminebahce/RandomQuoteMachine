import {Quotes_FETCHED} from '../actions/quotepage';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case Quotes_FETCHED:
            //console.log(action.payload.quotes.quotes);
            return action.payload.quotes.quotes;
        default:
            return state;
    }
}

export default reducer;
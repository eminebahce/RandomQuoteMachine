import request from 'superagent';

const baseURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
export const Quotes_FETCHED = 'Quotes_FETCHED';

export const loadQuotes = () =>{
    return(dispatch) => {
        request(baseURL).then(response => {
            dispatch(quotesFetched(JSON.parse(response.text)));
        }).catch(error => console.log(error));
    }
}

const quotesFetched = (quotes) => ({
   type: Quotes_FETCHED,
   payload:{
       quotes
   }
});


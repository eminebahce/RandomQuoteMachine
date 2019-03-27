import React from 'react';

export default function QuotePageList(props) {

    //const x = JSON.stringify(props.getRandomQuote);
    if(props.getRandomQuote) {
        console.log(props.getRandomQuote.quote);
        console.log(props.getRandomQuote.author);
    }

    return (
        <div>
        </div>
    );
}
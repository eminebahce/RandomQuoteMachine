import React from 'react';

export default function QuotePageList(props) {

    return (

        <div id='quoteBox'>
            {props.getRandom && (
                <div>
                    <div className='quoteText'>
                        <i className="fa fa-quote-left"> </i><span id="text"> {props.getRandom.quote}
                        &nbsp; &nbsp;
                        <i className="fa fa-quote-right"> </i>
                    </span>
                    </div>
                    < div className="quote-author">
                        - <span id="author">{props.getRandom.author}</span>
                    </div>
                </div>
            )}
            {!props.getRandom && <li>Loading...</li>}
            <div className='buttons'>
                <button className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                    <i className="fa fa-twitter"></i>
                </button>
                <button className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                    <i className="fa fa-tumblr"></i>
                </button>
                <button className="button" id="new-quote" onClick={() => window.location.reload()}>New quote</button>
            </div>
        </div>
    );
}
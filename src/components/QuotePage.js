import React, {Component} from 'react';
import {connect} from "react-redux";
import QuotePageList from './QuotePageList';
import {loadQuotes} from '../actions/quotepage';

class QuotePage extends Component{

    componentDidMount(){
        this.props.loadQuotes();
    }

    getRandomQuote = (allQuotes) => {
        return allQuotes[Math.floor(Math.random()*allQuotes.length)];
    }

    render(){
        return(
            <QuotePageList
                getRandom={this.getRandomQuote(this.props.quotes)}
                quotes={this.props.quotes}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    quotes: state
});

export default connect(mapStateToProps, {loadQuotes})(QuotePage)
import React, {Component} from 'react';
import {connect} from "react-redux";
import QuotePageList from './QuotePageList';
import {loadQuotes} from '../actions/quotepage';

class QuotePage extends Component {

    state = {
        randomQuote: {
            quote: 'Life isn’t about getting and having, it’s about giving and being.',
            author: 'Kevin Kruse'
        },
        colors: ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"],
        color: ''
    }

    componentDidMount() {
        this.props.loadQuotes();
    }

    getRandomQuote = () => {
        this.setState({
            randomQuote: this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)]
        });
    }

    getRandomColors = () => {
        this.setState({
            color: this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
        });
    }

    getRandom = () => {
        this.getRandomQuote();
        this.getRandomColors();
    }

    render() {
        return (
            <QuotePageList
                randomQuote={this.state.randomQuote}
                randomColor={this.state.color}
                getRandom={this.getRandom}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    quotes: state
});

export default connect(mapStateToProps, {loadQuotes})(QuotePage)
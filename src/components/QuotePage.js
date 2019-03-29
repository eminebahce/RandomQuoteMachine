import React, {Component} from 'react';
import {connect} from "react-redux";
import QuotePageList from './QuotePageList';
import {loadQuotes} from '../actions/quotepage';

class QuotePage extends Component{

    componentDidMount(){
        this.props.loadQuotes();
    }

    componentWillMount(){
        document.body.style.backgroundColor = this.props.randomColor;
        console.log();
    }

    componentWillUnmount(){
        document.body.style.backgroundColor = null;
    }


    getRandomQuote = (allQuotes) => {
        return allQuotes[Math.floor(Math.random()*allQuotes.length)];
    }

    getRandomColors = (colors) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        return randomColor;
    }

    render(){
        const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
        return(
            <QuotePageList
                getRandom={this.getRandomQuote(this.props.quotes)}
                quotes={this.props.quotes}
                randomColor={this.getRandomColors(colors)}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    quotes: state
});

export default connect(mapStateToProps, {loadQuotes})(QuotePage)
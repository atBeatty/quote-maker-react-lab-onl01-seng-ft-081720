import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { downvoteQuote, upvoteQuote } from '../actions/quotes'

class Quotes extends Component {
  // quotesToJSX = () => {
  //   this.props.quotes.map(quote => {
  //     console.log(quote)
  //   return <QuoteCard quote={quote}/>
  //   })
  // }
  render() {
    console.log(this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               {this.props.quotes.map(q => <QuoteCard key={q.id} quote={q} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const maptStateToProps = (state) => {
  return ({
    quotes: state.quotes
  })
}
export default connect(maptStateToProps, { downvoteQuote, upvoteQuote })(Quotes);

import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    content: '',
    author: '',
    votes: 0
  }

  handleOnChange = event => {
    console.log(event.target.name, event.target.value, this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
    // Handle Updating Component State
    // this.setState({event.target.name})
  }

  handleOnSubmit = event => {
    event.preventDefault() 
    const quote = {...this.state, id: uuid()}
    console.log(this.state)
    this.props.addQuote(quote)
    this.setState({
      content: '',
      author: ''
    })
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea onChange={this.handleOnChange} name="content"
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input onChange={this.handleOnChange} name="author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapDispatchToProps = (dispatch) => {
  return {
    addQuote: (quote) => {
      dispatch(addQuote(quote))
    }
  }
}
export default connect(null, mapDispatchToProps)(QuoteForm);

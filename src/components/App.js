import React, { Component } from "react";
import "../styles/App.scss";
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput:"",
    };

  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit =  this.handleSubmit.bind(this);

  }

  handleInput(value) {
    this.setState({valueInput: value});
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({valueInput: ''});
    hashHistory.push(`/films/${this.state.valueInput}`);
  }

  render() {
    const {valueInput} = this.state;
    return (

      <div className="home-wrapper">
      <form className="search" onSubmit={this.handleSubmit}>
        <input type="text" 
            className="search__input" 
            onChange={(event) => this.handleInput(event.target.value)}  
            value={valueInput}
        />
      </form>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}

const mapStateToProps = (state,ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



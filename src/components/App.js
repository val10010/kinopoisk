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
    if(!this.state.valueInput) return;
    this.setState({valueInput: ''});
    hashHistory.push(`/films/${this.state.valueInput}`);
  }

  render() {
    const {valueInput} = this.state;
    let title = ['k','i','n','o','p','o','i','s','k'];
    return (

      <div className="home-wrapper">
      <h2 className="home-title">
        {
          title.map((letter,index) => (
            <span className={`color-${index+1}`} key={letter+index}>{letter}</span>
          ))
        }
      </h2>
      <form className="search" onSubmit={this.handleSubmit}>
        <input type="text" 
            className="search__input" 
            onChange={(event) => this.handleInput(event.target.value)}  
            value={valueInput}
            placeholder="please, enter your film name ..."
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



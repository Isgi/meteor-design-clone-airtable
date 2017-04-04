import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

export default class Create extends Component {

  constructor() {
    super();
    this.state = {
      inputName: '',
      inputAge: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.inputName,
      age: this.state.inputAge,
      createdAt: new Date()
    }

    Meteor.call('data.insert', data, (err, res) => {
      if (err == undefined) {
        this.props.history.replace('/');
      }
    });
  }

  render() {
    console.log(this.props);
    return (
      <div style={styles.container}>
        <h2>Create Data</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div style={styles.textInputContain}>
            <label>Name</label><br/>
            <input
              onChange={(event) => {this.setState({inputName:event.target.value})}}
              value={this.state.inputName}
              style={styles.textInput} required placeholder='Name' type='text'
            />
          </div>
          <div style={styles.textInputContain}>
          <label>Age</label><br/>
          <input
            onChange={(event) => {this.setState({inputAge:event.target.value})}}
            value={this.state.inputAge}
            style={styles.textInput} required placeholder='Age' type='number' min='1'
          />
          </div>
          <div>
            <button style={styles.buttonSubmit} type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: '10px 10px 10px 10px'
  },
  textInput: {
    padding: '5px 5px 5px 5px',
    width: '200px'
  },
  textInputContain: {
    margin: '10px 10px 10px 10px'
  },
  buttonSubmit: {
    marginLeft: '10px',
    padding: '5px 5px 5px 5px',
    backgroundColor: '#eee',
    borderWidth: 0,
    fontSize: '16px'
  }
}

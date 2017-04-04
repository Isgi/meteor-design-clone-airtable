import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Data } from '../../api/data.js';

class Update extends Component {
  constructor() {
    super();
    this.state = {
      inputName: null,
      inputAge: null
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      _id: this.props.id,
      name: ReactDOM.findDOMNode(this.refs.inputName).value,
      age: ReactDOM.findDOMNode(this.refs.inputAge).value,
      createdAt: new Date()
    }

    Meteor.call('data.update', data, (err, res) => {
      if (err == undefined) {
        this.props.history.replace('/');
      }
    });
  }

  changeValue(){
    console.log(data);
    this.setState({inputName:data.name, inputAge:data.age});
  }

  render() {
    let view = <p>Loading ...</p>;
    if (this.props.ready) {
      const data = Data.findOne(this.props.id);
      if (data != undefined) {
        view = (
          <div style={styles.container}>
            <h2>Update Data</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div style={styles.textInputContain}>
                <label>Name</label><br/>
                <input
                  onChange={(event) => {this.setState({inputName:event.target.value})}}
                  ref="inputName"
                  value={this.state.inputName == null ? data.name : this.state.inputName}
                  style={styles.textInput} required placeholder='Name' type='text'
                />
              </div>
              <div style={styles.textInputContain}>
                <label>Age</label><br/>
                <input
                  onChange={(event) => {this.setState({inputAge:event.target.value})}}
                  ref="inputAge"
                  value={this.state.inputAge == null ? data.age : this.state.inputAge}
                  style={styles.textInput} required placeholder='Age' type='number' min='1'
                />
              </div>
              <div>
                <button style={styles.buttonSubmit} type='submit'>Update</button>
              </div>
            </form>
          </div>
        )
      }
    }
    return view;
  }
}

export default createContainer(({match}) => {
  const id = match.params.id;
  const selector = {_id:id};
  const options = {};
  const subscribe = Meteor.subscribe('data',{selector:selector, options:options});
  return {
    id: id,
    ready: subscribe.ready()
  }
}, Update);

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

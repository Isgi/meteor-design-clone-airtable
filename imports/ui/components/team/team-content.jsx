import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

import { Base, NewBase } from '../base/base';

export default class TeamContent extends Component {
  constructor() {
    super()
    this.state = {
      bases : []
    }
  }


  makeId()
  {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  handleAddBase() {
    base = {
      id: this.makeId(),
      name: 'Untitled Base',
      icon: '',
      color: '',
      alias: ''
    }
    this.state.bases.push(base);
    this.setState({bases : this.state.bases});
  }

  handleDelete(e) {
    for (let i = 0 ; i < this.state.bases.length ; i++) {
      if (this.state.bases[i].id == e){
        console.log(i)
        this.state.bases.splice(i,1);
        this.setState({bases: this.state.bases})
        console.log(this.state.bases)
      }
    }
  }

  render() {
   return (
      <div style={styles.basesContent}>
        {this.state.bases.map((base, index) => (
          <Base handleDelete={this.handleDelete.bind(this)} data={base} key={index} />
        ))}
        <NewBase onClick={() => this.handleAddBase()} />
      </div>
    )
  }
}

const styles = {
  basesContent: {
    margin: 'auto',
  }
}

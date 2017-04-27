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

  handleAddBase() {
    base = {
      name : 'Untitled Base',
      icon : '',
      color: ''
    }
    this.state.bases.push(base)
    this.setState({bases : this.state.bases});

  }

  render() {
    console.log(this.state.bases);
    return (
      <div style={styles.basesContent}>
        {this.state.bases.map((base, index) => (
          <Base data={base} key={index} />
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

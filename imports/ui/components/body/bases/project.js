import React, { Component } from 'react';
import { render } from 'react-dom';
import { Icon } from 'antd';

export default class Project extends Component {
  render() {
    return (
      <div>
        <div style={styles.header}>
          My Team
        </div>
        <div style={styles.basesContent}>
          <div style={styles.base1} />
          <div style={styles.base1} />
          <div style={styles.base1} />
          <div style={styles.base1} >
            <Icon type="plus" style={{ fontSize: 60, marginLeft: '20px', marginTop: '20px' }} />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  basesContent: {
    margin: 'auto'
  },
  header: {
    fontSize: 20,
    borderBottom: '1px solid #e9e9e9'
  },
  base1: {
    width: '100px',
    height: '100px',
    background: '#ececec',
    borderRadius: '6px',
    margin: '16px',
    display:'inline-block',
    float: 'left'
  },
}

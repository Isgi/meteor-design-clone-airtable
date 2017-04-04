import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Root extends Component {
  
  render() {
      return (
          <div>
              <div style={styles.sidebar}>
                <Link to='/' style={styles.a}>Data</Link>
              </div>
              <div style={styles.content}>
                {this.props.children}
              </div>
          </div>
      );
  }
}

const styles = {
  sidebar: {
    height: '100%',
    width: '200px',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#eee',
    paddingTop: 60,
  },
  a: {
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    fontSize: '25px',
    color: '#818181',
    display: 'block',
  },
  content: {
    marginLeft: '200px'
  }
}

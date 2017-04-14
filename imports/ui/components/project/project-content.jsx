import React, { Component } from 'react';
import { render } from 'react-dom';
import { Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

export default class ProjectContent extends Component {
  render() {
    return (
      <div style={styles.basesContent}>
        <Link to="/project/1">
          <div style={styles.base1}>
            <Button style={{marginLeft: '5px', marginTop: '5px'}} size="small" type="default" shape="circle" icon="down"/>
          </div>
        </Link>
        <div style={styles.base1} >
          <Icon type="plus" style={{ fontSize: 60, marginLeft: '20px', marginTop: '20px' }} />
        </div>
      </div>
    )
  }
}

const styles = {
  basesContent: {
    margin: 'auto'
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

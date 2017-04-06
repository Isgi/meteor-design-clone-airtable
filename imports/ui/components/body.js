import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from 'antd';

const { Content } = Layout;

export default class LayoutBody extends Component {
  render() {
    return (
      <Content style={styles.content}>
        <div style={styles.mainContent}>{this.props.content}</div>
      </Content>
    )
  }
}

const styles = {
  content: {
    padding: 24,
    background: '#fff'
  },
  mainContent: {
    background: '#fff',
    padding: 24,
    minHeight: 280,
    width: '900px',
    margin: 'auto'
  }
}

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from 'antd';

const { Footer } = Layout;

export default class LayoutFooter extends Component {
  render() {
    return (
      <Footer style={styles.footer}>
        CyberMANTRA ©2017 Created by Dev CyberMANTRA
      </Footer>
    )
  }
}

const styles = {
  footer: {
    padding: '10px',
    textAlign: 'center'
  }
}

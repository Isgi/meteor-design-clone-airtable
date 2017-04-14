import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export const LayoutFooter = () => (
  <Footer style={styles.footer}>
    CyberMANTRA ©2017 Created by Dev CyberMANTRA
  </Footer>
)

const styles = {
  footer: {
    padding: '10px',
    textAlign: 'center'
  }
}

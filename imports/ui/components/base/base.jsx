import React, { Component } from 'react';
import { Layout } from 'antd';

import { LayoutHeader } from '../../themes/header';
import { LayoutFooter } from '../../themes/footer';

const { Content } = Layout;

import Project from '../project/project';

export default class Bases extends Component {

  constructor() {
      super();
      this.state = {
          windowHeight: $(window).height()
      }
  }

  componentWillMount() {
      this.updateDimensions();
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
      this.setState({windowHeight:$(window).height()});
  }

  render() {
    return (
      <Layout style={{height:this.state.windowHeight}}>
        <LayoutHeader />
        <Content style={styles.content}>
          <div style={styles.mainContent}>
            <Project />
          </div>
        </Content>
        <LayoutFooter />
      </Layout>
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
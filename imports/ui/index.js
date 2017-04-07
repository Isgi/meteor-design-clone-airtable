import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from 'antd';

import { LayoutHeader } from './components/header';
import LayoutBody from './components/body';
import { LayoutFooter } from './components/footer';

export default class Root extends Component {

  constructor() {
    super();
    this.state = {
      collapsed: false,
      heightWindow: $(window).height()
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
    this.setState({heightWindow:$(window).height()});
    console.log($(window).height());
  }

  render() {
    return (
      <Layout style={{height:this.state.heightWindow}}>
        <LayoutHeader />
        <LayoutBody content={this.props.children} />
        <LayoutFooter />
      </Layout>
    );
  }

}

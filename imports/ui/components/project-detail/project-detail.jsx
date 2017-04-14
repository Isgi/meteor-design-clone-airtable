import React, { Component } from 'react';
import { Layout, Menu, Popover, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { LayoutHeaderProjectDetail } from '../../themes/header-project-detail';
import TableTabs from './table-tabs';
const { Content } = Layout;

export default class ProjectDetail extends Component {

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
                <LayoutHeaderProjectDetail/>
                <Content style={styles.content}>
                    <div style={styles.mainContent}>
                        <TableTabs />
                    </div>
                </Content>
            </Layout>
        );
    }
}


const styles = {
    content: {
        background: '#fff'
    },
    mainContent: {
        background: '#fff',
        padding: 5,
        minHeight: 280,
        width: '1200px',
        margin: 'auto'
    }
}

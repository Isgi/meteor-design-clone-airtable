import React, { Component, PropTypes } from 'react';
import { Layout, Row, Icon } from 'antd';
import { Link } from 'react-router-dom';

import TeamHeader from './team-header';
import TeamContent from './team-content';

import { LayoutHeader } from '../../themes/header';
import { LayoutFooter } from '../../themes/footer';

const { Content } = Layout;

export default class Team extends Component {

    constructor() {
        super();
        this.state = {
            windowHeight: $(window).height(),
            teams: []
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

    handleAddTeam() {
        const team = {
            name: 'New Name Team',
        }
        this.state.teams.push(team);
        this.setState({teams: this.state.teams});
    }

    render() {
        return (
            <Layout style={{height:this.state.windowHeight}}>
                <LayoutHeader />
                <Content style={styles.content}>
                    <div style={styles.mainContent}>
                      {this.state.teams.map((team, index) => (
                        <Row key={index}  style={styles.team}>
                            <TeamHeader data={team}/>
                            <TeamContent />
                        </Row>
                      ))}

                        <Row style={styles.newTeamContent}>
                            <div onClick={()=>this.handleAddTeam()} style={{cursor:'pointer'}}>
                                <Icon type="plus"/> Add new team
                            </div>
                        </Row>
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
    },
    newTeamContent: {
        fontSize: 20,
        marginTop: '100px',
        borderBottom: '1px solid #e9e9e9'
    },
    team: {
        marginTop: '10px',
        marginBottom: '30px'
    }
}
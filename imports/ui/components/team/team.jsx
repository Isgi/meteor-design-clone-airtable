import React, { Component, PropTypes } from 'react';
import { Layout, Row, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import TeamHeader from './team-header';
import TeamContent from './team-content';
import { Teams } from '../../../api/teams'

import { LayoutHeader } from '../../themes/header';
import { LayoutFooter } from '../../themes/footer';

const { Content } = Layout;

class NewTeam extends Component {
    actionCreateTeam(e) {
        e.preventDefault();
        Teams.insert({
            name: 'My New Team',
            createAt: new Date(),
            updateAt: new Date()
        },(err, res) => {
            console.log(res);
            console.log(err);
        })
    }

    render() {
        return (
            <Link to="#" onClick={this.actionCreateTeam}>
                <Icon type="plus"/> Add new team
            </Link>
        )
    }
}

class Team extends Component {

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
        console.log(this.props.loading);
        console.log(this.props.teams);

        return (
            <Layout style={{height:this.state.windowHeight}}>
                <LayoutHeader />
                <Content style={styles.content}>
                    <div style={styles.mainContent}>
                        {this.props.loading ? <Icon type="loading" /> :
                        this.props.teams.map((team) => (
                            <Row key={team._id} style={styles.team}>
                                <TeamHeader id={team._id} name={team.name}/>
                                <TeamContent />
                            </Row>
                        ))}
                        <Row style={styles.newTeamContent}>
                            <NewTeam/>
                        </Row>
                    </div>
                </Content>
                <LayoutFooter />
            </Layout>
        )
    }
}

Team.propTypes = {
    loading : React.PropTypes.bool,
    teams : React.PropTypes.array
}

export default createContainer(({param}) => {
    const subscription = Meteor.subscribe('teams',{selector:{},options:{}});
    const loading = !subscription.ready();
    const teams = Teams.find({}).fetch();
    return { loading, teams };
}, Team);

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
        borderBottom: '1px solid #e9e9e9'
    },
    team: {
        marginTop: '10px',
        marginBottom: '30px'
    }
}
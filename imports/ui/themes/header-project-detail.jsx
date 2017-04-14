import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Popover, Badge, Menu, Form, Icon, Input } from 'antd';

import { Notification } from './header/notification';

const { Header } = Layout;

export const LayoutHeaderProjectDetail = () => {
    const account = (
        <div>
            <b>isgiarriza@cybermantra.net</b>
            <ol>
                <li><Icon type="user" /> Account</li>
                <li><Icon type="logout" /> Log out</li>
            </ol>
        </div>
    );
    return (
        <Header style={styles.header}>
            <div style={styles.logo} />
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={styles.menu}
                selectable={false}>
                <Menu.Item key="4" style={{position: 'absolute',right: '20px'}}>
                    <Popover placement="bottomRight" title="Account" content={account} trigger="click">
                        <Link to='/'><Icon type="user" /></Link>
                    </Popover>
                </Menu.Item>
                <Menu.Item key="3" style={{position: 'absolute',right: '80px'}}>
                    <Popover placement="bottomRight" title="Notifications" content={<Notification />} trigger="click">
                        <Link to='/'>
                            <Icon type="bell" />
                        </Link>
                    </Popover>
                </Menu.Item>
                <Menu.Item key="2" style={{position: 'absolute',right: '140px'}}>
                    <Link to='/'><Icon type="question-circle-o" /></Link>
                </Menu.Item>
            </Menu>
            <div style={{width:200, position: 'absolute', left:'50%', zIndex: 2, top:'-10px'}}>
                <p style={{position: 'absolute'}}>Name Project</p>
            </div>
        </Header>
    )
}

const styles = {
    logo: {
        width: '120px',
        height: '31px',
        background: '#ececec',
        borderRadius: '6px',
        margin: '6px 24px 16px 0px',
        float: 'left'
    },
    header: {
        borderBottom: '1px solid #e9e9e9',
        height: '44px',
        backgroundColor: '#fff'
    },
    menu: {
        borderBottom: '1px solid #e9e9e9',
        height: '44px',
        lineHeight: '44px'
    }
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button }  from 'antd';

export const Base = () => (
    <Link to="/project/1">
        <div style={styles.base1}>
            <Button style={{marginLeft: '5px', marginTop: '5px'}} size="small" type="default" shape="circle" icon="down"/>
        </div>
    </Link>
)

export const NewBase = () => (
    <div style={styles.base1} >
        <Icon type="plus" style={{ fontSize: 60, marginLeft: '20px', marginTop: '20px' }} />
    </div>
)

const styles = {
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
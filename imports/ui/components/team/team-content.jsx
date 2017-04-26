import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

import { Base, NewBase } from '../base/base';

export default class TeamContent extends Component {
  render() {
    return (
      <div style={styles.basesContent}>
        {/*<Base />*/}
        <NewBase />
      </div>
    )
  }
}

const styles = {
  basesContent: {
    margin: 'auto',
  }
}

import React from 'react';
import { Tag, Col, Row, Icon, Button } from 'antd';

export const ProjectHeader = () => (
  <div style={styles.header}>
    <Row>
      <Col span={12}>
        <p>My Team</p>
      </Col>
      <Col span={12}>
        <div style={styles.tags}>
          <Tag color="pink">Isgi</Tag>
          <Tag color="red">Aji</Tag>
          <Tag color="orange">Mas Ega</Tag>
          <Tag color="green">Mas Haidar</Tag>
          <Button style={{bottom:2}} type="primary" shape="circle" icon="share-alt"/>
        </div>
      </Col>
    </Row>
  </div>
)

const styles = {
  header: {
    fontSize: 20,
    borderBottom: '1px solid #e9e9e9'
  },
  tags: {
    position:'absolute',
    right:'0px'
  }
}

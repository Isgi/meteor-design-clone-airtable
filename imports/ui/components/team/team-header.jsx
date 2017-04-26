import React, { Component } from 'react';
import { Tag, Col, Row, Icon, Button, Popconfirm, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import { Teams } from '../../../api/teams';

const FormItem = Form.Item;



export default class TeamHeader extends Component {
  constructor() {
    super();
    this.state = {
      visiblePopDelete : false,
      visibleButtonMod : false,
      visibleForm : false,
      valueForm : '',
    }
  }

  componentDidMount() {
    this.setState({valueForm:this.props.name});
  }

  buttonMod(visible) {
    if (!this.state.visiblePopDelete) {
      this.setState({visibleButtonMod:visible})
    }
  }

  handleDelete(id) {
      Teams.remove(id, (err, res) => {
        if (!err) {
          message.success('Team deleted');
        }else {
          message.error('Detele failed, error: '+err)
        }
      })
  }

  handleChangeForm(event) {
      this.setState({valueForm: event.target.value});
  }

  clickUpdate() {
    this.setState({visibleForm:true});
  }

  cancel(e) {
      console.log(e);
      this.handleVisibleChangePopDelete(false);
  }

  handleVisibleChangePopDelete(visible) {
      this.setState({ visiblePopDelete: visible });
  }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
          Teams.update(this.props.id,{$set: {name:this.state.valueForm}}, (err, res) => {
              if (!err) {
                  message.success('Team edited');
              }else {
                  message.error('Edited failed, error: '+err)
              }
          })
          this.setState({
              visibleForm:false,
              visibleButtonMod: false
          });
      }
  }

  render() {
    return (
        <div style={styles.header}>
          <Row>
            <Col span={12}>
              {this.state.visibleForm ? (
                  <FormItem style={{marginBottom:'2px'}}>
                      <Input autoFocus={true} value={this.state.valueForm} onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handleChangeForm.bind(this)} prefix={<Icon type="edit" style={{ fontSize: 13 }} />} placeholder="Search base..." />
                  </FormItem>
              ):(
                <div onMouseOver={()=>this.buttonMod(true)} onMouseLeave={()=>this.buttonMod(false)}>
                    {this.state.visibleButtonMod ?
                        <div style={{}}>
                          <Link title="Detele" to="#">
                            <Popconfirm
                                visible={this.state.visiblePopDelete}
                                onVisibleChange={()=>this.handleVisibleChangePopDelete(true)}
                                style={{zIndex:0}}
                                title="Are you sure delete this team?"
                                onConfirm={()=>this.handleDelete(this.props.id)}
                                onCancel={()=>this.cancel()}
                                okText="Yes"
                                cancelText="No">
                              <Icon style={{fontSize:'16px',marginLeft:'5px', marginRight:'2px', color:'gray'}} type="delete"/>
                            </Popconfirm>
                          </Link>
                          <Link title="Edit" onClick={()=>this.clickUpdate()} to="#"><Icon style={{fontSize:'16px', marginLeft:'4px', marginRight:'15px', color:'gray'}} type="edit"/></Link>
                            {this.props.name}
                        </div>
                        : this.props.name
                    }
                </div>
              )}
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
  }
}

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

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tag, Col, Row, Icon, Button, Popconfirm, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;

class FormTeamName extends Component {

  componentDidMount() {
    // console.log("click outside");
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
  }

  componentWillUnmount() {
    // console.log("click outside");
    document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  }

  handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);
    // console.log("click outside");
    if ((!domNode || !domNode.contains(event.target))) {
      this.props.onClickOutside(true);
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem>
          {getFieldDecorator('teamname', {
            rules: [{ required: true, message: 'Team name is required!' }],
          })(<Input style={{width:'300px'}} prefix={<Icon type="edit" style={{ fontSize: 12 }} />} autoFocus={true} onKeyDown={(e)=>this.props.onKeyDown(e)} />)}
        </FormItem>
      </Form>
    );
  }
}

const WrappedFormTeamName = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      teamname: props.teamname
    };
  },
  onValuesChange(_, values) {
  },
})(FormTeamName)

export default class TeamHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePopDelete : false,
      visibleButtonAction : false,
      visibleForm : false,
      fieldForm : {
        teamname: {
          value: props.data.name,
        }
      }
    }
  }

  buttonAction(visible) {
    if (!this.state.visiblePopDelete) {
      this.setState({visibleButtonAction:visible})
    }
  }

  handleFormChange(changedFields) {
    this.setState({
      fieldForm: { ...this.state.fieldForm, ...changedFields },
    });
  }

  cancel() {
      this.setState({
        visibleButtonAction:false,
        visiblePopDelete: false
      });
  }

  handleVisibleChangePopDelete(visible) {
      this.setState({ visiblePopDelete: visible });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' || e.keyCode === 27) {
      this.handleUpdate();
    }
  }

  handleKlikOutSide(e) {
    if (e) {
      this.handleUpdate();
    }
  }

  //query update here
  handleUpdate() {
    const nameTeam = this.state.fieldForm.teamname.value;
    this.props.handleUpdate(nameTeam);
    this.setState({
      visibleForm:false,
      visibleButtonAction: false
    });
  }

  //query delete here
  handleDelete() {

  }

  render() {
    const fieldForm = this.state.fieldForm;
    return (
        <div style={styles.header}>
          <Row>
            <Col span={12}>
              {this.state.visibleForm ? (
                <WrappedFormTeamName
                  {...fieldForm}
                  onClickOutside={this.handleKlikOutSide.bind(this)}
                  onKeyDown={this.handleKeyPress.bind(this)}
                  onChange={this.handleFormChange.bind(this)}
                />
              ):(
                <div onMouseOver={()=>this.buttonAction(true)} onMouseLeave={()=>this.buttonAction(false)}>
                  {this.state.visibleButtonAction ?
                    <div style={{}}>
                      <Link title="Detele" to="#">
                        <Popconfirm
                            placement="bottomLeft"
                            visible={this.state.visiblePopDelete}
                            onVisibleChange={()=>this.handleVisibleChangePopDelete(true)}
                            style={{zIndex:0}}
                            title="Are you sure delete this team?"
                            onConfirm={()=>this.props.handleDelete()}
                            onCancel={()=>this.cancel()}
                            okText="Yes"
                            cancelText="No">
                          <Icon style={{fontSize:'16px',marginLeft:'5px', marginRight:'2px', color:'gray'}} type="delete"/>
                        </Popconfirm>
                      </Link>
                      <Link title="Edit" onClick={()=>{this.setState({visibleForm: true})}} to="#"><Icon style={{fontSize:'16px', marginLeft:'4px', marginRight:'15px', color:'gray'}} type="edit"/></Link>
                        {this.state.fieldForm.teamname.value}
                    </div>
                    : this.state.fieldForm.teamname.value
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

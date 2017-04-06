import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

export default class Create extends Component {

  constructor() {
    super();
    this.state = {
      inputName: '',
      inputAge: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.inputName,
      age: this.state.inputAge,
      createdAt: new Date()
    }

    Meteor.call('data.insert', data, (err, res) => {
      if (err == undefined) {
        this.props.history.replace('/');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want other to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
          >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
      </Form>
    )
    // return (
    //   <div style={styles.container}>
    //     <h2>Create Data</h2>
    //     <form onSubmit={this.handleSubmit.bind(this)}>
    //       <div style={styles.textInputContain}>
    //         <label>Name</label><br/>
    //         <input
    //           onChange={(event) => {this.setState({inputName:event.target.value})}}
    //           value={this.state.inputName}
    //           style={styles.textInput} required placeholder='Name' type='text'
    //         />
    //       </div>
    //       <div style={styles.textInputContain}>
    //       <label>Age</label><br/>
    //       <input
    //         onChange={(event) => {this.setState({inputAge:event.target.value})}}
    //         value={this.state.inputAge}
    //         style={styles.textInput} required placeholder='Age' type='number' min='1'
    //       />
    //       </div>
    //       <div>
    //         <button style={styles.buttonSubmit} type='submit'>Submit</button>
    //       </div>
    //     </form>
    //   </div>
    // );
  }
}

const styles = {
  container: {
    margin: '10px 10px 10px 10px'
  },
  textInput: {
    padding: '5px 5px 5px 5px',
    width: '200px'
  },
  textInputContain: {
    margin: '10px 10px 10px 10px'
  },
  buttonSubmit: {
    marginLeft: '10px',
    padding: '5px 5px 5px 5px',
    backgroundColor: '#eee',
    borderWidth: 0,
    fontSize: '16px'
  }
}

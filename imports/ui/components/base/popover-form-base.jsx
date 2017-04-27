import React, { Component } from 'react';
import { Icon, Form, Input }  from 'antd';

const FormItem = Form.Item;

class PopoverFormBase extends Component {

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={styles.contentPopoverEditBase}>
        <Form layout="inline">
          <FormItem>
            {getFieldDecorator('basename', {
              rules: [{ required: true, message: 'Team name is required!' }],
            })(<Input placeholder="Base Name" style={{width:'188px'}} prefix={<Icon type="edit" style={{ fontSize: 12 }} />} autoFocus={true} onKeyDown={(e)=>this.props.onKeyDown(e)} />)}
          </FormItem>
        </Form>
        <div style={styles.contentBoxColor}>
          <div style={styles.boxColorBlue}></div>
          <div style={styles.boxColorPink}></div>
          <div style={styles.boxColorRed}></div>
          <div style={styles.boxColorYellow}></div>
          <div style={styles.boxColorGreen}></div>
          <div style={styles.boxColorPurple}></div>
          <div style={styles.boxColorGray}></div>
        </div>
        <div style={styles.contentOptionsIcon}>
          <Icon type="clock-circle-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'#fff', backgroundColor:'#f82b60'}} />
          <Icon type="area-chart" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="check-square-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="setting" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="cloud-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="barcode" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="bell" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="book" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="hourglass" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="camera-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="code-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="hdd" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="delete" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="play-circle-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="plus-square-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="lock" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="unlock" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="calendar" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="file" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="appstore-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="laptop" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="mail" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="search" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="tag-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="home" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="user" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="team" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="star-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="environment-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="heart-o" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="filter" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="message" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="calculator" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="database" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="layout" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="tool" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="medicine-box" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="global" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="wallet" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
          <Icon type="copyright" style={{fontSize: 25, cursor:'pointer', margin: '3px', borderRadius: '2px', padding:'2px', color:'gray', backgroundColor:'transparent' }} />
        </div>
        <div style={{padding:'10px 0px 0px 5px', cursor:'pointer'}}>
          <Icon type="share-alt"/> Share
        </div>
        <div style={{padding:'10px 0px 0px 5px', cursor:'pointer'}}>
          <Icon type="copy"/> Duplicate Base
        </div>
        <div style={{padding:'10px 0px 0px 5px', cursor:'pointer'}}>
          <Icon type="swap"/> Move base to another team
        </div>
        <div style={{padding:'10px 0px 0px 5px', cursor:'pointer'}}>
          <Icon type="delete"/> Delete base
        </div>
      </div>
    );
  }
}

const WrappedPopoverFormBase = Form.create({
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
})(PopoverFormBase);

export default WrappedPopoverFormBase;

const styles = {
  contentPopoverEditBase: {
    marginTop: '-21px',
    width: '200px',
    background: '#fff',
    borderRadius: '4px',
    border: '1px solid rgb(233, 233, 233)',
    zIndex: 1000,
    position: 'absolute',
    padding: '5px'
  },
  contentBoxColor: {
    margin: '0px 0px 0px 6px',
    height: '32px'
  },
  contentOptionsIcon: {
    backgroundColor:'rgba(0,0,0,0.04)',
    height:'100px',
    padding: '2px',
    overflow: 'scroll'
  },
  boxColorRed: {
    width: '20px',
    height: '20px',
    background: '#f82b60',
    borderRadius: '2px',
    margin: '6px 6px 3px 0px',
    float:'left',
    cursor:'pointer'
  },
  boxColorGreen: {
    width: '20px',
    height: '20px',
    background: '#20c933',
    borderRadius: '2px',
    margin: '6px 6px 3px 0px',
    float:'left',
    cursor:'pointer',
  },
  boxColorBlue: {
    width: '20px',
    height: '20px',
    background: '#2d7ff9',
    borderRadius: '2px',
    margin: '6px 6px 3px 0px',
    float:'left',
    cursor:'pointer',
  },
  boxColorYellow: {
    width: '20px',
    height: '20px',
    background: '#fcb400',
    borderRadius: '2px',
    margin: '6px 6px 3px 0px',
    float:'left',
    cursor:'pointer',
  },
  boxColorGray: {
    width: '20px',
    height: '20px',
    background: '#666',
    borderRadius: '2px',
    margin: '6px 6px 3px 0px',
    float:'left',
    cursor:'pointer',
  },
  boxColorPink: {
    width: '20px',
    height: '20px',
    background: '#ff08c2',
    borderRadius: '2px',
    margin: '6px 6px 3px 0px',
    float:'left',
    cursor:'pointer',
  },
  boxColorPurple: {
    width: '20px',
    height: '20px',
    background: '#8b46ff',
    borderRadius: '2px',
    margin: '6px 6px 3px 0px',
    float:'left',
    cursor:'pointer',
  }
}
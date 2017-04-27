import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button }  from 'antd';

import WrappedPopoverFormBase from './popover-form-base';

class PopoverEditBase extends Component {
  render() {
    return (
      this.props.visible ? <WrappedPopoverFormBase /> : null
    )
  }
}

export const Base = (props) => {
  let {name, icon, color } = props.data;
  const backgroundColors = ['#f82b60', '#20c933', '#2d7ff9', '#fcb400', '#666', '#ff08c2', '#8b46ff'];
  if (icon == '') {
    const words = name.match(/\b(\w)/g);
    let firstWord = [];
    for (let i=0; i < words.length; i++){
      if (i <= 2) {
        firstWord.push(words[i]);
      }
    }
    icon = firstWord.toString().replace(',', '');
  }

  if (color == '') {
    const selectColor = Math.floor(Math.random() * backgroundColors.length);
    color = backgroundColors[selectColor];
    console.log(color)
  }

  return (
    <div style={{width:'132px',display:'inline-block', float: 'left'}}>
      <Button
        onClick={()=>{console.log("ljlkjlk")}}
        style={styles.toggleButton}
        size="small"
        type="default"
        shape="circle"
        icon="down"/>
      <Link to="/project/1">
        <div style={{width: '100px', height: '100px', background: color, borderRadius: '6px', margin: '16px 16px 3px 16px', color: '#fff'}}>
          {props.data.icon == '' ?
          <div style={{fontSize:'65px', color:'#fff', textAlign:'center', lineHeight: '100px'}}>{icon}</div> : null}

        </div>
      </Link>
      <div style={{textAlign:'center'}}>props.base.name</div>
      <PopoverEditBase visible={true}/>
    </div>
  )
}

export const NewBase = (props) => (
  <div style={{width:'132px',display:'inline-block', float: 'left'}}>
    <Link to="#" onClick={props.onClick}>
      <div style={styles.baseAdd} >
        <Icon type="plus" style={{ fontSize: 50, marginLeft: '25px', marginTop: '25px' }} />
      </div>
    </Link>
    <div style={{textAlign:'center'}}>New Base</div>
  </div>
)

const styles = {
  base1: {
    width: '100px',
    height: '100px',
    background: '#ececec',
    borderRadius: '6px',
    margin: '16px 16px 3px 16px',
  },
  baseAdd: {
    width: '100px',
    height: '100px',
    background: '#ececec',
    borderRadius: '6px',
    margin: '16px 16px 3px 16px',
    color: 'gray'
  },
  toggleButton: {
    position:'absolute',
    marginLeft: '90px',
    marginTop: '90px'
  }
}
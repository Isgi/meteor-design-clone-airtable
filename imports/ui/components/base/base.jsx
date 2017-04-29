import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button }  from 'antd';

import WrappedPopoverFormBase from './popover-form-base';

export class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePopoverFormBase: false,
      visibleToggleButton: false,
      fieldForm : {
        basename: {
          value: props.data.name
        }
      },
      name: props.data.name,
      color: props.data.color,
      icon: props.data.icon,
      alias: props.data.alias,
      _id: props.data.id
    }

    this.togglePopoverFormBase = this.togglePopoverFormBase.bind(this);
  }

  componentWillMount() {
    console.log(this.props.id)
    if (this.state.icon == ''){
      this.setState({alias: this.getAlias(this.state.name)});
    }

    if (this.state.color== ''){
      this.setState({color: this.getRandomColor()});
    }
  }

  getRandomColor() {
    const backgroundColors = ['#f82b60', '#20c933', '#2d7ff9', '#fcb400', '#666', '#ff08c2', '#8b46ff'];
    const selectColor = Math.floor(Math.random() * backgroundColors.length);
    color = backgroundColors[selectColor];
    return color;
  }

  getAlias(name) {
    const words = name.match(/\b(\w)/g);
    if (words != null ){
      let firstWord = [];
      for (let i = 0; i < words.length; i++) {
        if (i <= 1) {
          firstWord.push(words[i]);
        }
      }
      return firstWord.toString().replace(',', '');
    }
    return '';
  }

  handleFormChange(changedFields) {
    this.setState({
      fieldForm: { ...this.state.fieldForm, ...changedFields },
      name: changedFields.basename.value,
      alias: this.getAlias(this.state.name)
    });
  }

  handleChangeColor(e){
    this.setState({color:e})
  }

  handleChangeIcon(e){
    this.setState({icon:e})
  }

  handleDelete(e){
    this.props.handleDelete(e);
  }

  togglePopoverFormBase() {
    this.setState({visiblePopoverFormBase: !this.state.visiblePopoverFormBase})
  }

  render() {
    const fieldForm = this.state.fieldForm;
    return (
      <div
        onMouseOver={()=>{this.setState({visibleToggleButton: true})}}
        onMouseLeave={()=>{this.setState({visibleToggleButton: false})}}
        style={{width:'132px',display:'inline-block', float: 'left'}}>
        {this.state.visibleToggleButton ?
          <Button
            onClick={this.togglePopoverFormBase}
            style={styles.toggleButton}
            size="small"
            type="default"
            shape="circle"
            icon="down"/> :
          null
        }

        <div style={{width: '100px', height: '100px', background: this.state.color, borderRadius: '6px', margin: '16px 16px 3px 16px', color: '#fff'}}>
          <Link to="/project/1">
            <div style={{fontSize:'65px', color:'#fff', textAlign:'center', lineHeight: '100px'}}>
              {this.state.icon == '' ?
                this.state.alias :
                <Icon type={this.state.icon} />
              }
            </div>
          </Link>
        </div>
        <div style={{textAlign:'center'}}>{this.state.name}</div>
        {this.state.visiblePopoverFormBase ?
          <WrappedPopoverFormBase
            {...fieldForm}
            handleChangeIcon={this.handleChangeIcon.bind(this)}
            handleChangeColor={this.handleChangeColor.bind(this)}
            handleDelete={this.handleDelete.bind(this)}
            onClickOutside={this.togglePopoverFormBase}
            data={{name, icon, alias, color, _id} = this.state}
            onChange={this.handleFormChange.bind(this)}/> :
          null
        }
      </div>
    );
  }
}

export const NewBase = (props) => (
  <div style={{width:'132px',display:'inline-block', float: 'left'}}>
      <div onClick={props.onClick} style={styles.baseAdd} >
        <Icon type="plus" style={{ fontSize: 50, marginLeft: '25px', marginTop: '25px' }} />
      </div>
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
    color: 'gray',
    cursor: 'pointer'
  },
  toggleButton: {
    position:'absolute',
    marginLeft: '90px',
    marginTop: '90px'
  }
}
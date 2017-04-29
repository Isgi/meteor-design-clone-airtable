import React, { Component } from 'react';
import { Icon, Form, Input }  from 'antd';
import ReactDOM from 'react-dom';

const FormItem = Form.Item;

class PopoverFormBase extends Component {
  constructor() {
    super();
    this.state = {
      defaultIconStyle: styles.icon,
      defaultBoxStyle: styles.box
    }
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.onClickOutside()
  }

  handleChangeColor(color) {
    this.props.handleChangeColor(color);
  }

  handleChangeIcon(icon) {
    this.props.handleChangeIcon(icon);
  }

  handleDelete(_id) {
    this.props.handleDelete(_id);
  }

  render() {
    const {name, icon, color, alias } = this.props.data;
    const typeIcons = ['clock-circle-o', 'area-chart', 'check-square-o', 'setting', 'cloud-o', 'barcode', 'bell', 'book', 'hourglass', 'camera-o', 'code-o', 'hdd', 'delete', 'play-circle-o', 'plus-square-o', 'lock', 'unlock', 'calendar', 'file', 'appstore-o', 'laptop', 'mail', 'search', 'tag-o', 'home', 'user', 'team', 'star-o', 'environment-o', 'heart-o', 'filter', 'message', 'calculator', 'database', 'layout', 'tool', 'medicine-box', 'global', 'wallet', 'copyright'];
    const boxColors = ['#f82b60', '#20c933', '#2d7ff9', '#fcb400', '#666', '#ff08c2', '#8b46ff'];
    const { getFieldDecorator } = this.props.form;

    return (
      <div  ref={node => { this.node = node;}} style={styles.contentPopoverEditBase}>
        <Form layout="inline">
          <FormItem>
            {getFieldDecorator('basename', {
              rules: [{ required: true, message: 'Base name is required!' }],
            })(<Input placeholder="Base Name" style={{width:'188px'}} prefix={<Icon type="edit" style={{ fontSize: 12 }} />} autoFocus={true} />)}
          </FormItem>
        </Form>
        <div style={styles.contentBoxColor}>
          {boxColors.map((boxColor, index) =>
            <div key={index} onClick={() => this.handleChangeColor(boxColor)} style={{...this.state.defaultBoxStyle, background: boxColor}}>
              {boxColor == color ?
                <Icon type="check"/> :
                null
              }
            </div>
          )}
        </div>
        <div style={styles.contentOptionsIcon}>
          {typeIcons.map((type, index)=> (
            type == icon ?
              <Icon key={index} type={type} style={{...this.state.defaultIconStyle, ...{backgroundColor: color, color:'#fff'}}} /> :
              <Icon key={index} onClick={()=>this.handleChangeIcon(type)} type={type} style={this.state.defaultIconStyle} />
          ))}
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
        <div onClick={()=>this.handleDelete(this.props.data._id)}  style={{padding:'10px 0px 0px 5px', cursor:'pointer'}}>
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
      basename: props.basename
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
  icon: {
    fontSize: 25,
    cursor:'pointer',
    margin: '3px',
    borderRadius: '2px',
    padding:'2px',
    color:'gray',
    backgroundColor:'transparent'
  },
  box: {
    width: '20px',
    height: '20px',
    borderRadius: '2px',
    margin: '6px 6px 3px 0px',
    float:'left',
    cursor:'pointer',
    color:'#fff',
    textAlign:'center',
    lineHeight: '20px',
    fontSize: '18px'
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
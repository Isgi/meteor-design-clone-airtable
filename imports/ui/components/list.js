import { Meteor } from 'meteor/meteor';
import React, { Component} from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Button, Table, Icon } from 'antd';

import { Data } from '../../api/data.js';

class List extends Component {
  constructor() {
    super();
    this.rowData = []
  }

  handleDelete(id) {
    Meteor.call('data.remove', id, (err, res) => {
      if (err == undefined) {
        this.props.history.replace('/');
      }
    });
  }

  renderData(){
    this.props.data.map((data, no) => {
      this.rowData.push({
        key:data._id,
        no:no+1,
        name: data.name,
        age: data.age,
        action: (
          <div>
            <Link style={{marginRight:10}} to={'update/'+data._id} ><Icon type="edit" /> Update</Link> 
            <a style={{color:'red'}} href="#" onClick={()=>this.handleDelete(data._id)}><Icon type="delete" /> Remove </a>
          </div>
        )
      });
    });
    return this.rowData;
  }

  render() {
    const columns =
      [
        {
          title: 'No',
          dataIndex: 'no'
        },
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Action',
          dataIndex: 'action',
        }
      ];
    const data = this.renderData();

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };

    return (
      <div>
        <Link to='create'><Button>Create</Button></Link><br/><br/>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
      </div>
    )
  }
}

export default createContainer(() => {
  const selector = {};
  const options = {sort:{createdAt:-1}};
  Meteor.subscribe('data',{selector:selector, options:options});
  return {
    data: Data.find({}).fetch(),
  };
}, List);

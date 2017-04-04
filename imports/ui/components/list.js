import { Meteor } from 'meteor/meteor';
import React, { Component} from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Data } from '../../api/data.js';

class List extends Component {
  handleDelete(id) {
    Meteor.call('data.remove', id, (err, res) => {
      if (err == undefined) {
        this.props.history.replace('/');
      }
    });
  }

  renderData(){
    return this.props.data.map((data, no) => (
      <tr key={data._id}>
        <td style={styles.tableColoumn}>{no+1}</td>
        <td style={styles.tableColoumn}>{data.name}</td>
        <td style={styles.tableColoumn}>{data.age}</td>
        <td style={styles.tableColoumn}>
          <Link to={'update/'+data._id} >Edit</Link> |
          <a href="#" onClick={()=>this.handleDelete(data._id)}>Delete </a>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>Data Page</h2>
        <Link to='create'><button style={styles.buttonCreate}>Create</button></Link>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableColoumn}>No</th>
              <th style={styles.tableColoumn}>Name</th>
              <th style={styles.tableColoumn}>Age</th>
              <th style={styles.tableColoumn}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderData()}
          </tbody>
        </table>
      </div>
    );
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

const styles = {
  container: {
    margin: '10px 10px 10px 10px'
  },
  buttonCreate: {
    padding: '5px 5px 5px 5px',
    backgroundColor: '#eee',
    borderWidth: 0,
    fontSize: '16px'
  },
  table: {
    margin: '5px 5px 5px 5px',
    width: '100%'
  },
  tableColoumn: {
    borderBottom: '1px solid #ddd',
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px'
  }
}

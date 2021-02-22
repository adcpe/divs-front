import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'División',
    dataIndex: 'name',
  },
  {
    title: 'División superior',
    dataIndex: 'parent_division',
  },
  {
    title: 'Colaboradores',
    dataIndex: 'employees',
  },
  {
    title: 'Nivel',
    dataIndex: 'level',
  },
  {
    title: 'Subdivisiones',
    dataIndex: 'subdivions',
  },
];

export default class TableContent extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get('https://apidivs.herokuapp.com/divisions').then((res) => {
      const data = res.data;
      this.setState({ data: data });
    });
  }

  render() {
    return <Table dataSource={this.state.data} columns={columns} />;
  }
}

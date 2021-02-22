import React, { Component } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Subdivisions from './Subdivisions';
import axios from 'axios';

export default class TableContent extends Component {
  state = {
    data: [],
    selectedRowKeys: [],
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => (this.searchInput = node)}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}>
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) => text,
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  onShowSizeChange = (current, pageSize) => console.log(current, pageSize);

  componentDidMount() {
    axios.get('https://apidivs.herokuapp.com/divisions').then((res) => {
      const data = res.data;
      this.setState({ data: data });
    });
  }

  render() {
    const columns = [
      {
        title: 'División',
        dataIndex: 'name',
        sorter: (a, b) => (a.name < b.name ? -1 : 1),
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'División superior',
        dataIndex: 'parent_division',
        sorter: (a, b) => (a.parent_division < b.parent_division ? -1 : 1),
        ...this.getColumnSearchProps('parent_division'),
      },
      {
        title: 'Colaboradores',
        dataIndex: 'employees',
        sorter: (a, b) => (a.employees < b.employees ? -1 : 1),
      },
      {
        title: 'Nivel',
        dataIndex: 'level',
        sorter: (a, b) => (a.level < b.level ? -1 : 1),
      },
      {
        title: 'Subdivisiones',
        dataIndex: 'subdivisions',
        sorter: (a, b) => (a.subdivisions < b.subdivisions ? -1 : 1),
        render: (subdivisions, { id }) => (
          <Subdivisions id={id} num={subdivisions} />
        ),
      },
    ];

    return (
      <>
        <Table
          rowSelection={{
            onChange: (selectedRowKeys) => {
              this.setState({ selectedRowKeys });
            },
          }}
          bordered
          pagination={{
            total: this.state.data.length,
            showTotal: (total) => `Total divisiones: ${total}`,
            pageSizeOptions: [5, 10, 20, 50],
            showSizeChanger: true,
            onShowSizeChange: this.onShowSizeChange,
          }}
          rowKey='id'
          columns={columns}
          dataSource={this.state.data}
        />
      </>
    );
  }
}

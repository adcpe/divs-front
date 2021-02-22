import React, { Component } from 'react';
import { Tooltip, Space, Typography } from 'antd';
import axios from 'axios';

export default class Subdivisions extends Component {
  state = {
    subs: [],
  };

  componentDidMount() {
    const url = `https://apidivs.herokuapp.com/divisions/${this.props.id}/subdivisions`;
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({ subs: data });
    });
  }

  title() {
    return this.props.num > 0
      ? this.state.subs.map((el, i) => <p key={i}>{el.name}</p>)
      : 'Sin subdivisiones';
  }

  render() {
    return (
      <Tooltip color='blue' title={this.title()}>
        <Space>
          <Typography.Link>{this.props.num}</Typography.Link>
        </Space>
      </Tooltip>
    );
  }
}

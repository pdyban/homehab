import './DeviceWidget.css'
import React, { Component } from 'react';

class DeviceWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h3>Device: {this.props.name}</h3></div>
    )
  }
}

export default DeviceWidget;

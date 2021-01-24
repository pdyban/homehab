import './RoomWidget.css'
import React, { Component } from 'react';

class RoomWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h3>Room: {this.props.name}</h3></div>
    )
  }
}

export default RoomWidget;

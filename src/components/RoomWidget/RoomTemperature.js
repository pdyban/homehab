import './RoomTemperature.css'
import React, { Component } from 'react';

class RoomTemperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h4>Temperature: {this.props.itemID}</h4></div>
    )
  }
}

export default RoomTemperature;

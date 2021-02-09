import './RoomHumidity.css'
import React, { Component } from 'react';

class RoomHumidity extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h4>Humidity: {this.props.itemID}</h4></div>
    )
  }
}

export default RoomHumidity;

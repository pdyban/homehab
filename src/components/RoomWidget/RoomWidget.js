import './RoomWidget.css';
import RoomTemperature from './RoomTemperature.js';
import RoomHumidity from './RoomHumidity.js';
import React, { Component } from 'react';

class RoomWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.name = props.name;
    this.elements = [];
    for(const [index, element] of props.config.elements.entries()) {
      if(element.type === 'RoomTemperature') {
        this.elements.push(<RoomTemperature itemID={element.id} key={index} />);
      }
      else if(element.type === 'RoomHumidity') {
        this.elements.push(<RoomHumidity itemID={element.id} key={index} />);
      }
      else {
        console.error("Undefined element type " + element.type + ". Ignoring.");
      }
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h3>Room: {this.name}</h3><br/>{this.elements} </div>
    )
  }
}

export default RoomWidget;

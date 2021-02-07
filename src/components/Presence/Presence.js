import './Presence.css'
import React, { Component } from 'react';

class Presence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      present: 'false'
    };
    this.itemID = props.itemID;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h3>Presence: {this.itemID}</h3></div>
    )
  }
}

export default Presence;

import './Presence.css'
import React, { Component } from 'react';

class Presence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      present: 'false'
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h3>{this.state.present}</h3></div>
    )
  }
}

export default Presence;

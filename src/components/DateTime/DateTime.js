import './DateTime.css'
import React, { Component } from 'react';

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.itemID = props.itemID;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h3>Today: {this.itemID}</h3></div>
    )
  }
}

export default DateTime;

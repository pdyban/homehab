import './DateTime.css'
import React, { Component } from 'react';

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.date = 'Wed, 17th Nov 2019'
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h3>{this.date}</h3></div>
    )
  }
}

export default DateTime;

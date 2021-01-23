import './DateTime.css'
import React, { Component } from 'react';

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div><h3>{this.props.date}</h3></div>
    )
  }
}

export default DateTime;

import './DateTime.css'
import React, { Component } from 'react';
import axios from 'axios';

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now()
    };
    console.log(props);
    this.itemID = props.itemID;
    this.serverURL = props.config.serverURL;
    this.date = null;
  }

  componentDidMount() {
      this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);

      const url = this.serverURL + '/items/' + this.itemID;
      console.log(url);
      axios.get(url, {
          headers: {}
        })
        .then((response) => {this.date = response.data.state; console.log(this.date);})
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
      return this.itemID;
  }

  componentWillUnmount() {}

  render() {
    return (
      <div><h3>Today: {this.date}</h3></div>
    )
  }
}

export default DateTime;

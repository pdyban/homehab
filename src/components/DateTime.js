import './DateTime.css'
import React, { Component } from 'react';
// import axios from 'axios';

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: Date.now()
    };
    console.log(this.props);
    this.elements = props.elements;
    this.serverURL = props.serverURL;
    this.sitemap = props.sitemap;
    this.date = null;
  }

  componentDidMount() {
      //this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000);
  }

  componentWillUnmount() {}

  render() {
    console.log('Rendering datetime widget');

    // for(const element of this.elements) {
    //   if(element.label.startsWith('DateElement')) {
    //     axios.get(element.item.link)
    //       .then((response) => {
    //         console.log(response.data.state);
    //         this.date = response.data.state;
    //       });
    //   }
    // }
    return (
      <div data-testid="DateTimeWidget"><h3>Today: {this.date}</h3></div>
    )
  }
}

export default DateTime;

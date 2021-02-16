import './WidgetBar.css'
import DeviceWidget from './DeviceWidget'
import RoomWidget from './RoomWidget'
import React, { Component } from 'react';
import axios from 'axios';

class WidgetBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // widgets: []
    };
    this.serverURL = props.serverURL;
    this.sitemap = props.sitemap;
    this.widgets = [];
    this.mounted = true;
  }

  componentDidMount() {
    // parse list of widgets from the sitemap
    // get sitemap
    // filter widgets by label
    // for each widget, create component
    let widgets = [];
    // this.axiosCancelSource = axios.CancelToken.source()

    const url = this.serverURL + '/sitemaps/' + this.sitemap;
    axios.get(url, {
        headers: {}
      })
      .then((response) => {
        for(const w of response.data.homepage.widgets) {
          const labels = w.type.split(':');
          if(w.type === 'Frame' && labels[0] === 'RoomWidget') {
            widgets.push(<RoomWidget config={this.props.config} name={labels[1]} elements={w.widgets} key={w.widgetId} />)
          }
          else if(w.type === 'Frame' && labels[0] === 'DeviceWidget') {
            widgets.push(<DeviceWidget config={this.props.config} name={labels[1]} elements={w.widgets} key={w.widgetId} />)
          }
        }
        this.widgets = widgets;
      })
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
  }

  componentWillUnmount() {
    // this.axiosCancelSource.cancel('Axios request canceled.');
  }

  render() {
    // var widgets = [];
    // for(const [index, w] of this.widgets.entries()) {
    //   switch (w.type) {
    //     case 'RoomWidget':
    //         widgets.push(<RoomWidget name={w.name} key={index} config={w} />)
    //       break;
    //     case 'DeviceWidget':
    //         widgets.push(<DeviceWidget name={w.name} key={index} config={w} />)
    //       break;
    //     default:
    //       console.warn('Unknown widget type ' + w.type);
    //       break;
    //   }
    // }
    return (
      <div>
      {this.widgets}
      </div>
    )
  }
}

export default WidgetBar;

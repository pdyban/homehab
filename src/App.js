import './App.scss';
import DateTime from './components/DateTime';
import Presence from './components/Presence';
import WidgetBar from './components/WidgetBar'
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.serverURL = props.config.serverURL;
    this.sitemap = props.config.sitemap;
    this.widgets = [];
  }

  componentDidMount() {
    // parse list of widgets from the sitemap
    // get sitemap
    // filter widgets by label
    // for each widget, create component
    let widgets = [];
    // this.axiosCancelSource = axios.CancelToken.source()

    const url = this.serverURL + '/sitemaps/' + this.sitemap;
    axios.get(url)
      .then((response) => {
        for(const w of response.data.homepage.widgets) {
          const labels = w.type.split(':');
          if(w.type === 'Frame' && labels[0] === 'DateTimeWidget') {
            widgets.push(<DateTime config={this.props.config} elements={w.widgets} key={w.widgetId} />);
          }
        }
        this.widgets = widgets;
      })
      .catch(function (error) {
        handleAxiosError(error);
      });
  }

  handleAxiosError(error) {
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
  }

  render() {
    // let widgetBarConfig = {
    //   'common': this.props.config.common,
    //   'widgets': widgets
    // };
    return (
      <div className="App" data-testid="background">
      {this.widgets}
      <WidgetBar config={this.props.config} />
      </div>
    );
  }
}

export default App;

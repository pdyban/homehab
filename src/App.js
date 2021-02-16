import './App.scss';
import DateTime from './components/DateTime';
import WidgetBar from './components/WidgetBar';
import SettingsWidget from './components/SettingsWidget';
import React, { Component } from 'react';
import axios from 'axios';

// function handleAxiosError(error) {
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response.headers);
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     // http.ClientRequest in node.js
//     console.log(error.request);
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.log('Error', error.message);
//   }
//   console.log(error.config);
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.initialized = false;
    this.state = {
      serverURL:  localStorage.getItem('serverURL'),
      sitemap:    localStorage.getItem('sitemap'),
      settingsValidated: false,
      datetimeElements: []
    }
    this.widgets = [];
    this.onServerURLChanged = this.onServerURLChanged.bind(this);
    this.onSitemapChanged   = this.onSitemapChanged.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.serverURL !== this.state.serverURL || prevState.sitemap !== this.state.sitemap) {
      this.validateInput().then(ret => this.setState({settingsValidated: ret}));
    }
    console.log(this.state.serverURL);
  }

  async validateInput() {
    let widgets = [];
    try {
      const url = this.state.serverURL + '/sitemaps/' + this.state.sitemap;
      let response = await axios.get(url, {headers: {}});
      if(response.status === 200) {
        for(const w of response.data.homepage.widgets) {
            const labels = w.label.split(':');
            if(w.type === 'Frame' && labels[0] === 'DateTimeWidget') {
              console.log('Loading widget ' + w.type + ' ' + labels);
              this.setState({datetimeElements: w.widgets});
              this.setState({datetimeKey: w.widgetId});
            }
         }
         widgets.push(<WidgetBar serverURL={this.state.serverURL} sitemap={this.state.sitemap} key="widgetbar" />);
      }
      else {
        this.setState({datetimeElements: []});
      }
      this.widgets = widgets;
      return(response.status === 200);
    } catch (e) {
      return false;
    }
  }

  onServerURLChanged(value) {
    console.log('new server URL: ' + value);
    this.setState({serverURL: value});
    localStorage.setItem('serverURL', value);
  }

  onSitemapChanged(value) {
    console.log('new sitemap: ' + value);
    this.setState({sitemap: value});
    localStorage.setItem('sitemap', value);
  }

  componentDidMount() {
    this.validateInput().then(ret => this.setState({settingsValidated: ret}));
  }

  render() {
    // parse list of widgets from the sitemap
    // get sitemap
    // filter widgets by label
    // for each widget, create component
    let widgets = [];
    widgets.push(<SettingsWidget key="settingswidget"
        serverURL={this.state.serverURL}
        sitemap={this.state.sitemap}
        onServerURLChanged={this.onServerURLChanged}
        onSitemapChanged={this.onSitemapChanged}
        validated={this.state.settingsValidated} />);
    if(this.state.settingsValidated) {
      if(this.state.datetimeElements.length > 0) {
        widgets.push(<DateTime serverURL={this.state.serverURL} sitemap={this.state.sitemap} elements={this.state.datetimeElements} key={this.state.datetimeKey} />);
      }
    }
    return (
      <div className="App" data-testid="background">
        {widgets}
      </div>
    );
  }
}

export default App;

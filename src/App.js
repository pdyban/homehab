import './App.scss';
import DateTime from './components/DateTime/DateTime.js';
import Presence from './components/Presence/Presence.js';
import WidgetBar from './components/WidgetBar/WidgetBar.js'
import React, { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log(this.props.config);
    let dateTimeWidget;
    let presenceWidget;
    let widgets = []
    for(const w of this.props.config.widgets) {
      switch(w.type) {
        case 'DateTime':
          dateTimeWidget = <DateTime config={this.props.config.common} />;
          break;
        case 'Presence':
          presenceWidget = <Presence config={this.props.config.common} />;
          break;
        default:
          widgets.push(w);
          break;
      }
    }
    let widgetBarConfig = {
      'common': this.props.config.common,
      'widgets': widgets
    };
    <WidgetBar config={this.props.config} />
    return (
      <div className="App">
      { dateTimeWidget }
      { presenceWidget }
      <WidgetBar config={widgetBarConfig} />
      </div>
    );
  }
}

export default App;

import './App.scss';
import DateTime from './components/DateTime';
import Presence from './components/Presence';
import WidgetBar from './components/WidgetBar'
import React, { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let dateTimeWidget;
    let presenceWidget;
    let widgets = [];
    for(const w of this.props.config.widgets) {
      switch(w.type) {
        case 'DateTime':
          dateTimeWidget = <DateTime config={this.props.config.common} itemID={w.id} />;
          break;
        case 'Presence':
          presenceWidget = <Presence config={this.props.config.common} itemID={w.id} />;
          break;
        default:
          widgets.push(w);
          break;
      }
    };
    let widgetBarConfig = {
      'common': this.props.config.common,
      'widgets': widgets
    };
    return (
      <div className="App" data-testid="background">
      { dateTimeWidget }
      { presenceWidget }
      <WidgetBar config={widgetBarConfig} />
      </div>
    );
  }
}

export default App;

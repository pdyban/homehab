import './WidgetBar.css'
import DeviceWidget from './DeviceWidget'
import RoomWidget from './RoomWidget'
import React, { Component } from 'react';

class WidgetBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      present: 'false'
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    var widgets = [];
    for(const [index, w] of this.props.config.widgets.entries()) {
      switch (w.type) {
        case 'RoomWidget':
            widgets.push(<RoomWidget name={w.name} key={index} config={w} />)
          break;
        case 'DeviceWidget':
            widgets.push(<DeviceWidget name={w.name} key={index} config={w} />)
          break;
        default:
          console.warn('Unknown widget type ' + w.type);
          break;
      }
    }
    return (
      <div>
      {widgets}
      </div>
    )
  }
}

export default WidgetBar;

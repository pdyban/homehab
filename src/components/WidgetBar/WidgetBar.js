import './WidgetBar.css'
import DeviceWidget from '../DeviceWidget/DeviceWidget.js'
import RoomWidget from '../RoomWidget/RoomWidget.js'
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
    return (
      <div>
        <DeviceWidget name="Vacuum Cleaner" />
        <RoomWidget name="Living Room" />
        <RoomWidget name="Bathroom" />
      </div>
    )
  }
}

export default WidgetBar;

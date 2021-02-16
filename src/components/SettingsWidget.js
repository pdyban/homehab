import './SettingsWidget.scss';
import React, { Component } from 'react';
import { InputGroup, FormControl, Button, Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';

class SettingsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      inputValidated: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if(event.target.id === 'serverURL') this.props.onServerURLChanged(event.target.value);
    if(event.target.id === 'sitemap')   this.props.onSitemapChanged(event.target.value);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Button variant="dark float-right" onClick={() => this.setState({open: !this.state.open})}
            aria-controls="collapse-settingswidget"
            aria-expanded={this.state.open}>
          Settings
        </Button>

        <Collapse in={this.state.open}>
        <div data-testid="SettingsWidget" className="settingswidget flex-column p-4 collapse" id="collapse-settingswidget">
          <h3>Settings</h3>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="prefix-serverURL">
                OpenHAB Server Path:
              </InputGroup.Text>
            </InputGroup.Prepend>

            <OverlayTrigger
              key="tooltip-serverURL"
              placement="top"
              overlay={
                <Tooltip id="tooltip-serverURL">
                  Network path to OpenHAB's ReST API server (e.g. http://openhab:8080/rest)
                </Tooltip>
              }
            >
            <FormControl id="serverURL" aria-describedby="prefix-serverURL"
              defaultValue={this.props.serverURL} onChange={this.handleChange}
              className={this.props.validated ? 'validated': 'notvalidated'}
            />
            </OverlayTrigger>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="prefix-sitemap">
                Sitemap Name:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <OverlayTrigger
              key="tooltip-serverURL"
              placement="top"
              overlay={
                <Tooltip id="tooltip-serverURL">
                  Sitemap name (e.g. homehab)
                </Tooltip>
              }
            >
            <FormControl id="sitemap" aria-describedby="prefix-sitemap"
              defaultValue={this.props.sitemap} onChange={this.handleChange}
              className={this.props.validated ? 'validated': 'notvalidated'}
            />
            </OverlayTrigger>
          </InputGroup>
        </div>
        </Collapse>
      </>
    )
  }
}

export default SettingsWidget;

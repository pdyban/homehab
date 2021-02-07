import { render, screen } from '@testing-library/react';
import App from './App';
import DateTime from './components/DateTime/DateTime.js';
import Presence from './components/Presence/Presence.js';
import WidgetBar from './components/WidgetBar/WidgetBar.js'
import testConfig from './config.test.json';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// mock OpenHAB ReST API endpoints for testing
const server = setupServer(
  rest.get('/items', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('HomeHAB test suite', () => {
  test('Render App', () => {
    render(<App config={testConfig} />);
  });

  test('Render DateTime widget', () => {
    render(<DateTime itemID="testItemID" />);
    expect(screen.getByText(/Today:/)).toBeInTheDocument();
  });

  test('Render Presence widget', () => {
    render(<Presence itemID="testItemID" />);
    expect(screen.getByText(/Presence:/)).toBeInTheDocument();
  });

  test('Render WidgetBar', () => {
    let widgets = [];
    for(const w of testConfig.widgets) {
      if(w.type != 'DateTime' && w.type != 'Presence') { widgets.push(w); }
    };
    let widgetBarConfig = {
      'common': testConfig.common,
      'widgets': widgets
    };
    render(<WidgetBar config={widgetBarConfig} />);
    expect(screen.getByText(/Room: Living Room/)).toBeInTheDocument();
    expect(screen.getByText(/Room: Bathroom/)).toBeInTheDocument();
  });


});

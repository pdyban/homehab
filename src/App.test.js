import { render, screen } from '@testing-library/react';
import App from './App';
import DateTime from './components/DateTime';
import Presence from './components/Presence';
import WidgetBar from './components/WidgetBar';
import testConfig from './config.test2.json';
import mockAPI from './mockAPI.test.json';
import background from './assets/background.jpg';
// mock ReST API for tests
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/sitemaps/homehab', (req, res, ctx) => {
    return res(ctx.json(mockAPI.sitemap))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('HomeHAB test suite', () => {
  test('Render App', () => {
    render(<App config={testConfig} />);
    expect(screen.getByTestId('background').style).toHaveProperty('background-image');
  });

  test.skip('Render DateTime widget', () => {
    render(<DateTime config={testConfig} itemID="testItemID" />);
    expect(screen.getByText(/Today:/)).toBeInTheDocument();
  });

  test.skip('Render Presence widget', () => {
    render(<Presence config={testConfig} itemID="testItemID" />);
    expect(screen.getByText(/Presence:/)).toBeInTheDocument();
  });

  test.only('Render WidgetBar', () => {
    // let widgets = [];
    // for(const w of testConfig.widgets) {
    //   if(w.type != 'DateTime' && w.type != 'Presence') { widgets.push(w); }
    // };
    // let widgetBarConfig = {
    //   'common': testConfig.common,
    //   'widgets': widgets
    // };
    render(<WidgetBar config={testConfig} />);
    // expect(screen.getByText(/Room: Living Room/)).toBeInTheDocument();
    // expect(screen.getByText(/Room: Bathroom/)).toBeInTheDocument();
  });


});

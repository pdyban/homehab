import { render, screen, waitFor } from '@testing-library/react';
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
  }),
  rest.get('/items/Date', (req, res, ctx) => {
    return res(ctx.json(mockAPI.Date))
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

  test('Render DateTime widget', async () => {
    render(<DateTime config={testConfig} itemID="testItemID" elements={mockAPI.sitemap.homepage.widgets[0].widgets} />);
    await waitFor(() => screen.getByTestId("DateTimeWidget"));

    expect(screen.getByText(/Today:/)).toBeInTheDocument();
    // expect(screen.getByTestId("DateTimeWidget")).toHaveTextContent("Today: 2021-02-16T18:02:05.086+0100");
  });

  test.skip('Render Presence widget', () => {
    render(<Presence config={testConfig} itemID="testItemID" />);
    expect(screen.getByText(/Presence:/)).toBeInTheDocument();
  });

  test('Render WidgetBar', () => {
    render(<WidgetBar config={testConfig} />);
    // expect(screen.getByText(/Room: Living Room/)).toBeInTheDocument();
    // expect(screen.getByText(/Room: Bathroom/)).toBeInTheDocument();
  });


});

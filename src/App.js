import './App.scss';
import DateTime from './components/DateTime/DateTime.js';
import Presence from './components/Presence/Presence.js';
import WidgetBar from './components/WidgetBar/WidgetBar.js'

function App() {
  return (
    <div className="App">
      <DateTime date="Wed, 12th Nov 2019" />
      <Presence />
      <WidgetBar />
    </div>
  );
}

export default App;

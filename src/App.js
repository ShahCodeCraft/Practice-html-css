import logo from './logo.svg';
import './App.css';
import StopWatch from './component/StopWatch';
// import DigitalClock from './component/DigitalClock';
import CrudApp from './component/CrudOperation';

// import Demo from './component/Demo';

function App() {
  return (
    <div className="App">
      {/* <DigitalClock /> */}
      <StopWatch />
      <CrudApp />
      {/* <Demo /> */}
    </div>
  );
}

export default App;

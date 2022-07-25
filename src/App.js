import { Toc } from '@mui/icons-material';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar_container">
        <div className="sidebar">
          <Toc />
        </div>
      </div>
      <div className="body_container"></div>
    </div>
  );
}

export default App;

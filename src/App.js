import './App.css';
import { Toc } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <div className="sidebar_container">
        <div className="sidebar">
          <div className="lines_icon">
            <Toc />
          </div>
          <div className="profile">
            <img
              src="https://media.bunjang.co.kr/product/177600551_1_1643548856_w360.jpg"
              alt="profile_pic"
            />
          </div>
        </div>
      </div>
      <div className="body_container"></div>
    </div>
  );
}

export default App;

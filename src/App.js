import logo from './myAvatar.PNG';
import './App.css';
import { Accordion, AccordionSummary, ExpandMoreIcon, Typography, AccordionDetails, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div className="App-sidebar">
        <div className="App-sidebar-info">
          <figure className="App-sidebar-info-avatar">
            <img src={logo} alt="logo" className='App-avatar'/>
          </figure>
          <div className="App-sidebar-info-name">Desmond Zhu</div>
          <div className="App-sidebar-info-title">Software Engineer</div>
          </div>
        </div>
    </div>
  );
}

export default App;

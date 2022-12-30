import logo from './myAvatar.PNG';
import './App.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';



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
          <button className="App-sidebar-info-more-button" onClick={
            () => {
              const contacts = document.querySelector('.App-sidebar-info-contacts');
              const button = document.querySelector('.App-sidebar-info-more-button');
              const collapseButton = document.querySelector('.App-sidebar-info-more-button-icon-collapse');
              button.classList.toggle('hidden');
              contacts.classList.toggle('hidden');
              collapseButton.classList.toggle('hidden');
              
            }
          }>
            <ArrowDropDownIcon className="App-sidebar-info-more-button-icon"/>
            </button>

            <div className="App-sidebar-info-contacts hidden">
              <div className="App-sidebar-info-contacts-item">
                <GitHubIcon className="App-sidebar-info-contacts-item-icon"/>
                <a href="www.github.com/dizzyZff" className="App-sidebar-info-contacts-item-link">Github</a>
                </div>
              <div className="App-sidebar-info-contacts-item">
                <EmailIcon className="App-sidebar-info-contacts-item-icon" />
                <a href="mailto:desmondzooooom@gmail.com" className="App-sidebar-info-contacts-item-link">Email</a>
                </div>
              <button className="App-sidebar-info-more-button" onClick={
                () => {
                  const contacts = document.querySelector('.App-sidebar-info-contacts');
                  const button = document.querySelector('.App-sidebar-info-more-button');
                  const collapseButton = document.querySelector('.App-sidebar-info-more-button-icon-collapse');
                  button.classList.toggle('hidden');
                  contacts.classList.toggle('hidden');  
                  collapseButton.classList.toggle('hidden');
                }
              }>
            <ArrowDropUpIcon className="App-sidebar-info-more-button-icon-collapse hidden"/>
            </button>
            </div>
            
          </div>
        </div>

      <div className="App-content">
        <div className="App-content-banner">

        </div>     
            
        </div>
    </div>
  );
}

export default App;

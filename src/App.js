import logo from './myAvatar.PNG';
import './App.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Slider from "react-slick";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';



function App() {
  return (
    <Router>
      <Layout>
        <HomePage />
      </Layout>
      </Router>
  );
}

export default App;

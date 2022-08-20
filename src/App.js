import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes,  Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import logo from './components/assets/logo.jpg'
import { Info } from './components/Info/Info';
import { Info1} from './components/Info/Info1';
import { Agra } from './components/Info/Agra';
import { PortBlair } from './components/Info/Port_Blair';
import { Leh } from './components/Info/Leh';
import { Manali } from './components/Info/manali';
import SearchItem from './components/Data/data';



function App() {
  return (
    
    <>
    
    
    <BrowserRouter>
    <nav>
          <div className="title2">
          <Link to='/'><img src={logo} alt="logo" /></Link>
            
            <div className="nav_list">
            
            <div className="home_list">
            <a href='#'><Link to='/'>Home</Link></a>
            <a href='#'> <Link to='/destinations' >Destinations</Link></a>
            <a href="#">Contact Us</a> 
            <a href='#'><Link to = '/Login'>Login</Link></a>
            </div>
            <div className="login_btn">
              
              </div>       
          </div>
            
            </div>
          

        </nav>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/destinations' element = {<SearchItem/>}/>
      <Route path='/Login' element = {<Login/>} />
      <Route path='/destinations/info' element = {<Info/>}/>
      <Route path='/destinations/udaipur' element = {<Info1/>}/>
      <Route path='/destinations/agra' element = {<Agra/>}/>
      <Route path='/destinations/port_blair' element = {<PortBlair/>}/>
      <Route path='/destinations/leh' element = {<Leh/>}/>
      <Route path='/destinations/manali' element = {<Manali/>}/>
    </Routes>
    </BrowserRouter>
    

 
    </>
  );
}

export default App;

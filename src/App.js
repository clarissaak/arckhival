import logo from './logo.svg';
import './App.css';
import Work from './pages/Work.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className="header">
          <h2>Clarissa Kristanto</h2>
          <div className='navBar'>
            <NavLink to='/work' className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

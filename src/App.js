import './App.css';
import Home from './pages/Home';
import Work from './pages/Work.js';
import About from './pages/About.js';
import {HashRouter as Router, Routes, Route, NavLink} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className="header">
          <NavLink to='/' className='homeLink'>ar<span className="initials">ck</span>hival</NavLink>
          <div className='navBar'>
            <NavLink to='/work' className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

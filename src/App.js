import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

// Import Components
// import Navbar from './components/Navbar'

function App(props) {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
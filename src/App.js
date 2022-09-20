import React, { useState } from 'react';
import './assets/App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/login' element={<Login  setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;

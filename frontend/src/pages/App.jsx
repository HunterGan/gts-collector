import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Login from './Login.jsx';
import MainPage from './MainPage.js';


function App(props) {

  return (
    <div >
      <Navbar />
      <Router>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/send'} element={<p>Send data</p>} />
          <Route path={'/manageusers'} element={<p>Manage users</p>} />
          <Route path={'/statistics'} element={<p>Statistics</p>} />
          <Route path={'*'} element={<p>Not Found</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
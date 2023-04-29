import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Login from './Login.jsx';


function App(props) {

  return (
    <div className="md:container md:mx-auto bg-slate-300 h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Application for fetching data.
      </h1>
      <Router>
        <Routes>
          <Route path={'/'} element={<p>Home</p>} />
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
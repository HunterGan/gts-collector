import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, useLocation, Navigate,
} from 'react-router-dom';

function App(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Application for fetching data.
      </h1>
      <Router>
        <Routes>
          <Route path={'/'} element={<p>Home</p>} />
          <Route path={'/login'} element={<p>Login</p>} />
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
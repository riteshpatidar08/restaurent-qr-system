import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import ProtectRoutes from './components/ProtectRoutes';
import OpenRoutes from './components/OpenRoutes';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            //required accessToken to get this page
            <ProtectRoutes>
              <Homepage />
            </ProtectRoutes>
          }
        />

        <Route
          path="/login"
          element={
            <OpenRoutes>
              <Login />
            </OpenRoutes>
          }
        />

        <Route
          path="/register"
          element={
            <OpenRoutes>
              <Register />
            </OpenRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

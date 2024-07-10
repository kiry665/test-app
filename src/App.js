import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/user/Header';
import Individual from './components/user/Individual';
import Menu from './components/user/Menu';
import LoginPage from './views/user/LoginPage';
import HomePage from './views/user/HomePage';
import {AuthProvider} from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <AuthProvider>
      <div className="App">
      <Router>
        <Header toggleMenu={toggleMenu}/>
        <Routes>
          <Route path="/check" element={
            <Individual></Individual>
          }/>
          <Route path="/login" element={
            <LoginPage></LoginPage>
          }/>
          <Route path="/" element={
            <HomePage></HomePage>
          }/>
        </Routes>
      </Router>
      <Menu isOpen={isOpenMenu}></Menu>
    </div>
    </AuthProvider>
    
  );
}

export default App;

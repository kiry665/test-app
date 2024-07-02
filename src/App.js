import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/user/Header';
import Individual from './components/user/Individual';
import Menu from './components/user/Menu';
import Login from './components/user/Login';
import Main from './components/user/Main';

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="App">
      <Router>
        <Header toggleMenu={toggleMenu}/>
        <Routes>
          <Route path="/check" element={
            <Individual></Individual>
          }/>
          <Route path="/auth" element={
            <Login></Login>
          }/>
          <Route path="/" element={
            <Main></Main>
          }/>
        </Routes>
      </Router>
      <Menu isOpen={isOpenMenu}></Menu>
    </div>
  );
}

export default App;

import Header from './components/user/Header';
import Individual from './components/user/Individual';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/user/Menu';
import { useState } from "react";
import Login from './components/user/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="App">
      {/* <header>
        <Header toggleMenu={toggleMenu}/>
      </header>
      <Individual/>
      <Menu isOpen={isOpenMenu}/>
      <Login></Login> */}

      
      <Router>
        <Header toggleMenu={toggleMenu}/>
        <Routes>
          <Route path="/" element={
            <Individual></Individual>
          }/>
          <Route path="/auth" element={
            <Login></Login>
          }/>
        </Routes>
      </Router>
      <Menu isOpen={isOpenMenu}></Menu>
    </div>
  );
}

export default App;

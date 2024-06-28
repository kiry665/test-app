import Header from './components/user/Header';
import Individual from './components/user/Individual';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/user/Menu';
import { useState } from "react";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="App">
      <header>
        <Header toggleMenu={toggleMenu}/>
      </header>
      <Individual/>
      <Menu isOpen={isOpenMenu}/>
    </div>
  );
}

export default App;

import { createContext, useState, useEffect, useContext } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(
      localStorage.getItem('isAuthenticated') === 'true'
    );

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            setIsAuthenticated(false);
            localStorage.removeItem('isAuthenticated');
        }
    }, []);

    const auth = (token, expires) => {
        Cookies.set('token', token, { expires: expires });
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const logout = () => {
        Cookies.remove('token');
        Cookies.remove('login');
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, auth, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };
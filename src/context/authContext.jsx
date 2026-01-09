// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from 'react';
import fetchBase from '@/fetch/fetch.jsx';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(() => {
      const saved = localStorage.getItem('user');
      return saved ? JSON.parse(saved) : null;
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const data = await fetchBase('api/checkauth');

          if (data.success) {
            const userData = {
              nombre: data.user.nombre,
              email: data.user.email
            };

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
          } else {
            setUser(null);
            localStorage.removeItem('user');
          }
        } finally {
          setLoading(false);
        }
      };

      checkAuth();
    }, []);

  const login = async ({ username, password }) => {

    const data = await fetchBase('api/login', {
      method: 'POST',
      body: { username, password },
    });

    if (data.success) {

      const userData = {
        nombre: data.user.nombre,
        email: data.user.email
      }

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

    }

    return data;
  };

  const logout = async () => {
    await fetchBase('api/logout', { 
        method: 'POST'
    });
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

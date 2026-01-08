// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from 'react';
import fetchBase from '@/fetch/fetch.jsx';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const data = await fetchBase('api/checkauth');

            if (data.success) {
                setUser(data.user);
            } else {
                setUser(null);
            }

            setLoading(false);
        };

        checkAuth();
    }, []);

  const login = async ({ username, password }) => {
    const data = await fetchBase('api/login', {
      method: 'POST',
      body: { username, password },
    });

    if (data.success) {
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
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

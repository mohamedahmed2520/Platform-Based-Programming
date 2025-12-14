import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App(){
  const [token, setToken] = useState(localStorage.getItem('token')||null);
  const [theme, setTheme] = useState(localStorage.getItem('theme')||'light');

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return token ? <Dashboard token={token} setToken={setToken} setTheme={setTheme} theme={theme} /> : <Login onLogin={(t)=>{setToken(t); localStorage.setItem('token', t);}} />;
}

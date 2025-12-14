import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin }) {
  const [email,setEmail]=useState('admin@example.com');
  const [password,setPassword]=useState('password');
  const [err,setErr]=useState(null);
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login',{ email, password });
      onLogin(res.data.token);
    } catch (e) { setErr(e.response?.data?.error || e.message); }
  };
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-xl mb-4">Sign in</h2>
      {err && <div className="text-red-600 mb-2">{err}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full p-2 border" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Sign in</button>
      </form>
    </div>
  );
}

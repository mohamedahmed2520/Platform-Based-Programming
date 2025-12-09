import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard({ token, setToken, setTheme, theme }) {
  const [users,setUsers]=useState([]);
  const [err,setErr]=useState(null);

  useEffect(()=>{ fetchUsers(); }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/api/users', { headers: { Authorization: 'Bearer ' + token }});
      setUsers(res.data);
    } catch (e) { setErr(e.response?.data?.error || e.message); }
  };

  const logout = ()=>{ localStorage.removeItem('token'); setToken(null); };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Admin Dashboard</h1>
        <div>
          <button onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="mr-2 p-2 border rounded">Toggle Theme</button>
          <button onClick={logout} className="p-2 border rounded">Logout</button>
        </div>
      </div>
      {err && <div className="text-red-600">{err}</div>}
      <div className="bg-white rounded shadow p-4">
        <table className="w-full table-auto">
          <thead><tr><th>ID</th><th>Email</th><th>Name</th><th>Admin</th></tr></thead>
          <tbody>
            {users.map(u=>(
              <tr key={u.id}><td>{u.id}</td><td>{u.email}</td><td>{u.name}</td><td>{String(u.isAdmin)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

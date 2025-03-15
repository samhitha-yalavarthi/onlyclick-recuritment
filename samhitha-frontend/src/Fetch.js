
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../api/api';

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/dashboard'); // Protected endpoint
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      {

      }
      <button onClick={logout}>Logout</button>
    </div>
  );
}
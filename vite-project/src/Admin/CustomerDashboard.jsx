import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerDashboard = () => {
  const [requests, setRequests] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/my-requests', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // filter only user's requests
        const userRequests = res.data.filter(req => req.userId === user.id);
        setRequests(userRequests);
      } catch (err) {
        console.error('Error fetching customer requests', err);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Dashboard</h2>
      <ul>
        {requests.map((req) => (
          <li key={req.id} className="mb-4 border-b pb-2">
            <p><strong>Device:</strong> {req.device}</p>
            <p><strong>Issue:</strong> {req.issue}</p>
            <p><strong>Status:</strong> {req.status}</p>
            <p><strong>Scheduled:</strong> {new Date(req.scheduled).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerDashboard;

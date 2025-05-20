import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/repair', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setRequests(res.data);
      } catch (err) {
        console.error('Error fetching admin data', err);
      }
    };

    fetchRequests();
  }, []);

  return (
   <div className="p-6">
  <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h2>

  <div className="overflow-x-auto bg-white shadow-md rounded-lg">
    <table className="min-w-full table-auto">
      <thead className="bg-gray-100 text-gray-700 text-left text-sm uppercase tracking-wider">
        <tr>
          <th className="px-6 py-3">User</th>
          <th className="px-6 py-3">Device</th>
          <th className="px-6 py-3">Issue</th>
          <th className="px-6 py-3">Scheduled</th>
          <th className="px-6 py-3">Status</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {requests.map((req) => (
          <tr key={req.id} className="border-b hover:bg-gray-50">
            <td className="px-6 py-4 font-medium">
              {req.user?.name || <span className="italic text-gray-400">Unknown</span>}
            </td>
            <td className="px-6 py-4">{req.device}</td>
            <td className="px-6 py-4">{req.issue}</td>
            <td className="px-6 py-4">{new Date(req.scheduled).toLocaleString()}</td>
            <td className="px-6 py-4">
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full font-semibold ${
                  req.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : req.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800'
                    : req.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {req.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default AdminDashboard;

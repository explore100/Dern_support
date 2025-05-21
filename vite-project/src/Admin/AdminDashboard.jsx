import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [replies, setReplies] = useState({});

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/repair', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRequests(res.data);
      } catch (err) {
        console.error('Error fetching admin data', err);
      }
    };

    fetchRequests();
  }, []);

  const handleReplyChange = (id, message) => {
    setReplies((prev) => ({ ...prev, [id]: message }));
  };

 const sendReply = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.put(`http://localhost:3000/api/repair/${id}/reply`, {
      adminMessage: replies[id],
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    toast.success('Reply sent and request approved!');
    
    // Update local state with new adminMessage and status
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, adminMessage: replies[id], status: 'Approved' } : r
      )
    );

    setReplies((prev) => ({ ...prev, [id]: '' })); // Clear input
  } catch (err) {
    toast.error('Failed to send reply');
  }
};

  return (
    <div className="p-6">
      <ToastContainer />
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
              <th className="px-6 py-3">Reply</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {requests.map((req) => (
              <tr key={req.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{req.user?.name || 'Unknown'}</td>
                <td className="px-6 py-4">{req.device}</td>
                <td className="px-6 py-4">{req.issue}</td>
                <td className="px-6 py-4">{new Date(req.scheduled).toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 text-sm rounded-full font-semibold ${
                    req.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    req.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    req.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder="Reply to user"
                    className="border p-1 text-sm mr-2"
                    value={replies[req.id] || ''}
                    onChange={(e) => handleReplyChange(req.id, e.target.value)}
                  />
                  <button
                    onClick={() => sendReply(req.id)}
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Send
                  </button>
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

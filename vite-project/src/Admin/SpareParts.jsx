import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const SpareParts = () => {
  const [parts, setParts] = useState([]);

  const fetchParts = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3000/api/parts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setParts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateStock = async (id, stock) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:3000/api/parts/${id}`, { stock: parseInt(stock) }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success('Stock updated');
      fetchParts(); // Refresh
    } catch (err) {
      console.error(err);
      toast.error('Failed to update stock');
    }
  };

  useEffect(() => {
    fetchParts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Spare Parts Inventory</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Part Name</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id}>
              <td className="border px-4 py-2">{part.name}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  defaultValue={part.stock}
                  onBlur={(e) => updateStock(part.id, e.target.value)}
                  className="w-20 border px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2 text-sm text-gray-600">Blur input to save</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpareParts;

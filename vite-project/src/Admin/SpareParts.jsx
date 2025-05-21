import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpareParts = () => {
  const [parts, setParts] = useState([]);
  const [newPart, setNewPart] = useState({ name: '', stock: '', image: null });

  const fetchParts = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3000/api/parts', {
        headers: { Authorization: `Bearer ${token}` }
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
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Stock updated');
      fetchParts();
    } catch (err) {
      console.error(err);
      toast.error('Failed to update stock');
    }
  };

  const handleAddPart = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('name', newPart.name);
    formData.append('stock', newPart.stock);
    if (newPart.image) formData.append('image', newPart.image);

    try {
      await axios.post('http://localhost:3000/api/parts', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Spare part added');
      setNewPart({ name: '', stock: '', image: null });
      fetchParts();
    } catch (err) {
      console.error(err);
      toast.error('Failed to add part');
    }
  };

  useEffect(() => {
    fetchParts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Spare Parts Inventory</h2>

      <form onSubmit={handleAddPart} className="mb-6 flex items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Part name"
          value={newPart.name}
          onChange={(e) => setNewPart({ ...newPart, name: e.target.value })}
          required
          className="border px-3 py-2"
        />
        <input
          type="number"
          placeholder="Stock"
          value={newPart.stock}
          onChange={(e) => setNewPart({ ...newPart, stock: e.target.value })}
          required
          className="border px-3 py-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewPart({ ...newPart, image: e.target.files[0] })}
          className="border px-3 py-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Part
        </button>
      </form>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Part Name</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id}>
              <td className="border px-4 py-2">
                {part.image && (
                  <img
                    src={`http://localhost:3000${part.image}`}
                    alt={part.name}
                    className="h-10"
                  />
                )}
              </td>
              <td className="border px-4 py-2">{part.name}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  defaultValue={part.stock}
                  onBlur={(e) => updateStock(part.id, e.target.value)}
                  className="w-20 border px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2 text-sm text-gray-600">click anywhere to update</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpareParts;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpareParts = () => {
  const [parts, setParts] = useState([]);
  const [newPart, setNewPart] = useState({ name: '', stock: '', image: null });
  const [role, setRole] = useState('');

  const fetchParts = async () => {
    try {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      setRole(user.role);

      const endpoint =
        user.role === 'admin'
          ? 'http://localhost:3000/api/parts'
          : 'http://localhost:3000/api/customer/parts';

      const res = await axios.get(endpoint, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setParts(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch spare parts');
    }
  };

  const updateStock = async (id, stock) => {
    if (role !== 'admin') return;
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
    if (role !== 'admin') return;

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

      {/* Only show add part form if admin */}
      {role === 'admin' && (
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
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {parts.map((part) => (
    <div key={part.id} className="border rounded-lg shadow-sm p-4 bg-white">
      {part.image && (
        <img
          src={`http://localhost:3000${part.image}`}
          alt={part.name}
          className="h-32 w-full object-contain mb-4"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-800">{part.name}</h3>
      <p className="text-sm text-gray-600 mb-2">Stock: 
        {role === 'admin' ? (
          <input
            type="number"
            defaultValue={part.stock}
            onBlur={(e) => updateStock(part.id, e.target.value)}
            className="ml-2 w-20 border px-2 py-1 rounded"
          />
        ) : (
          <span className="ml-2 font-medium">{part.stock}</span>
        )}
      </p>

      {role === 'admin' && (
        <p className="text-xs text-gray-500">Blur input to update stock</p>
      )}
    </div>
  ))}
</div>

</div>
      
  );
};

export default SpareParts;

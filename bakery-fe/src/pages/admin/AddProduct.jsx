import React, { useState, useEffect } from "react";
import api from "../../api";
import LeftBar from "../../components/layout/LeftBar";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await api.get("/items");
      setItems(res.data);
    } catch (err) {}
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await api.post("/items", {
        ...form,
        price: parseFloat(form.price),
      });
      alert("Product added!");
      setForm({ title: "", price: "", image: "", description: "" });
      fetchItems();
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <LeftBar />
      <div className="flex-1 p-6 flex gap-8">
        {/* Product list on the left */}
        <div className="w-72 max-h-[80vh] overflow-y-auto bg-base-200 rounded p-4 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <Icon icon="mdi:cupcake" className="text-4xl mb-4 ml-2" />
            <p className="text-2xl font-bold font-amaranth">bakery</p>
            <Icon icon="mdi:cupcake" className="text-4xl mb-4 ml-2" />
          </div>

          {items.length === 0 && (
            <div className="text-center text-gray-500">No products found.</div>
          )}
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="card bg-base-100 shadow p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-full object-cover rounded mb-2"
                />
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-primary font-bold text-sm">${item.price}</p>
                <p className="text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Add product form on the right */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6 font-amaranth">Add Product</h1>
          <form className="max-w-lg space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Product Name"
              className="input input-bordered w-full"
              value={form.title}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              value={form.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
              value={form.image}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              value={form.description}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
            {error && <div className="text-red-500">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

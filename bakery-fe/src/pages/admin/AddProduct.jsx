import { useState, useEffect } from "react";
import api from "../../api";
import LeftBar from "../../components/layout/LeftBar";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { formatVND } from "../../utils";

const AddProduct = () => {
  const [imageType, setImageType] = useState("file");
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    type: "bread", // default type
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
      setItems(res.data.results || res.data);
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
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("price", form.price);
      formData.append("description", form.description);
      formData.append("type", form.type);
      if (imageType === "file" && form.image instanceof File) {
        formData.append("image", form.image);
      } else if (imageType === "url" && typeof form.image === "string") {
        formData.append("image_url", form.image); // Use a custom field for URL
      }
      if (form.id) {
        await api.put(`/items/${form.id}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product updated!");
      } else {
        await api.post("/items/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product added!");
      }
      setForm({
        title: "",
        price: "",
        image: "",
        description: "",
        type: "bread",
        id: undefined,
      });
      fetchItems();
    } catch (err) {
      setError("Failed to save product.");
    } finally {
      setLoading(false);
    }
  };

  // handle delete item
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await api.delete(`/items/${id}/`);
        fetchItems();
      } catch (err) {
        alert("Failed to delete product.");
      }
    }
  };
  const handleEdit = (item) => {
    setForm({
      title: item.title,
      price: item.price,
      image: item.image,
      description: item.description,
      type: item.type,
      id: item.id,
    });
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
                <p className="text-primary font-bold text-sm">{formatVND(item.price)}</p>
                <p className="text-xs">{item.description}</p>
                <p className="text-xs italic text-gray-500">{item.type}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-xs btn-warning"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Add product form on the right */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6 font-amaranth">
            {form.id ? "Edit Product" : "Add Product"}
          </h1>
          {form.id && (
            <button
              type="button"
              className="btn btn-secondary mb-2"
              onClick={() =>
                setForm({
                  title: "",
                  price: "",
                  image: "",
                  description: "",
                  type: "bread",
                  id: undefined,
                })
              }
            >
              Back to Add Product
            </button>
          )}
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
            <select
              name="type"
              className="select select-bordered w-full"
              value={form.type}
              onChange={handleChange}
              required
            >
              <option value="bread">Bread</option>
              <option value="pastries">Pastries</option>
              <option value="cake">Cake</option>
              <option value="misc">Misc</option>
            </select>
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
            <div className="flex gap-4 mb-2">
              <label>
                <input
                  type="radio"
                  name="imageType"
                  value="file"
                  checked={imageType === "file"}
                  onChange={() => setImageType("file")}
                />{" "}
                Upload Image
              </label>
              <label>
                <input
                  type="radio"
                  name="imageType"
                  value="url"
                  checked={imageType === "url"}
                  onChange={() => setImageType("url")}
                />{" "}
                Image URL
              </label>
            </div>
            {imageType === "file" ? (
              <input
                type="file"
                name="image"
                accept="image/*"
                className="input input-bordered w-full"
                onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
              />
            ) : (
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
                value={typeof form.image === "string" ? form.image : ""}
                onChange={handleChange}
              />
            )}
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
              {loading
                ? form.id
                  ? "Updating..."
                  : "Adding..."
                : form.id
                ? "Update Product"
                : "Add Product"}
            </button>
            {error && <div className="text-red-500">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

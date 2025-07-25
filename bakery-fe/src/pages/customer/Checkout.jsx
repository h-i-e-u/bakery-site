import { useCart } from "../../context/CartContext";
import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatVND } from "../../utils";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { t } = useTranslation();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

  // Shipping form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    notice: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Place order handler
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.post("/orders/", {
        customer_name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        address: form.address,
        phone: form.phone,
        notice: form.notice,
        total: subtotal,
        status: "pending",
        items: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        orderDate: new Date().toISOString(),
      });
      clearCart();
      alert("Order placed successfully!");
      navigate("/thankyou"); // Or show a success message/modal
    } catch (err) {
      alert("Failed to place order. Please try again.");
      setError("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-amaranth">{t("Checkout")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card bg-base-200 p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">{t("Shipping Information")}</h2>
            <form className="space-y-4" onSubmit={handlePlaceOrder}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full"
                value={form.address}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="notice"
                placeholder="Notice (optional)"
                className="input input-bordered w-full"
                value={form.notice}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="btn btn-primary w-full mt-6"
                disabled={loading || cart.length === 0}
              >
                {loading ? t("Placing Order...")  : t("Place Order")}
              </button>
              {error && <div className="text-red-500 mt-2">{error}</div>}
            </form>
          </div>
        </div>

        <div className="card bg-base-200 p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">{t("Order Summary")} </h2>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>{formatVND((item.price * item.quantity))}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mb-2">
            <span>{t("Subtotal")}</span>
            <span>${formatVND(subtotal)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>{t("Shipping")}</span>
            <span>{formatVND(0.00)}</span>
          </div>
          <div className="flex justify-between font-bold mb-6">
            <span>{t("Total")}</span>
            <span>{formatVND(subtotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

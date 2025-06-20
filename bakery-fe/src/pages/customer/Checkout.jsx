import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-amaranth">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card bg-base-200 p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex items-center space-x-2 ml-1">
                  <input
                    type="checkbox"
                    checked
                    className="checkbox"
                  />
                  <span>Inner city</span>
                </label>
                <input
                  type="text"
                  placeholder="Notice (optional)"
                  className="input input-bordered w-full md:col-span-2"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="card bg-base-200 p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold mb-6">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="btn btn-primary w-full mt-6">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

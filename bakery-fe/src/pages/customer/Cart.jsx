import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-amaranth">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex items-center gap-4 mb-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-bold">{item.title}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>${item.price} each</p>
                  </div>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <button className="btn btn-warning mt-4" onClick={clearCart}>
              Clear Cart
            </button>
          )}
        </div>
        
        <div className="card bg-base-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
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
          <button
            className="btn btn-primary w-full"
            disabled={cart.length === 0}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
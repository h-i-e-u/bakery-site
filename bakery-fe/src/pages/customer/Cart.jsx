import React from 'react'

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-amaranth">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Cart items will go here */}
        </div>
        
        <div className="card bg-base-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold mb-6">
            <span>Total</span>
            <span>$0.00</span>
          </div>
          <button className="btn btn-primary w-full">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
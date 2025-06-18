import React from 'react'

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-amaranth">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card bg-base-200 p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
              </div>
              <input type="email" placeholder="Email" className="input input-bordered w-full" />
              <input type="text" placeholder="Address" className="input input-bordered w-full" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="City" className="input input-bordered w-full" />
                <input type="text" placeholder="State" className="input input-bordered w-full" />
                <input type="text" placeholder="ZIP" className="input input-bordered w-full" />
              </div>
            </form>
          </div>

          <div className="card bg-base-200 p-6">
            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Card Number" className="input input-bordered w-full" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="input input-bordered w-full" />
                <input type="text" placeholder="CVV" className="input input-bordered w-full" />
              </div>
            </form>
          </div>
        </div>

        <div className="card bg-base-200 p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          {/* Order summary details */}
          <button className="btn btn-primary w-full mt-6">Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
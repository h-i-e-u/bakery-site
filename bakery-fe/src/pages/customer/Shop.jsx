import React from 'react'

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-amaranth">Our Products</h1>
      
      <div className="flex gap-4 mb-8">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>Category</option>
          <option>Bread</option>
          <option>Pastries</option>
          <option>Cakes</option>
        </select>
        
        <input type="text" placeholder="Search products" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ItemCard components will go here */}
      </div>
    </div>
  )
}

export default Shop

const Product = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="product-image">
          <img src="placeholder.jpg" alt="Product" className="rounded-lg w-full" />
        </div>
        
        <div className="product-info">
          <h1 className="text-4xl font-bold mb-4 font-amaranth">Product Name</h1>
          <p className="text-2xl font-bold text-primary mb-4">$9.99</p>
          <p className="mb-6">Product description goes here...</p>
          
          <div className="flex gap-4 items-center mb-6">
            <input type="number" min="1" defaultValue="1" className="input input-bordered w-20" />
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
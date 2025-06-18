import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold font-amaranth">Sweet Delights Bakery</h1>
            <p className="py-6">Fresh baked goods made with love every day</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </section>

      <section className="featured-products py-12">
        <h2 className="text-3xl font-bold text-center mb-8 font-amaranth">Featured Products</h2>
        {/* ItemCard components will go here */}
      </section>
    </div>
  )
}

export default Home
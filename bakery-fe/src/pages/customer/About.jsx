import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-amaranth">About Sweet Delights</h1>
        <p className="max-w-2xl mx-auto">
          We're passionate about creating delicious baked goods using traditional recipes
          and the finest ingredients. Every day, our master bakers craft fresh breads,
          pastries, and cakes for our community.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title font-amaranth">Our Story</h2>
            <p>Story content goes here...</p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title font-amaranth">Our Values</h2>
            <p>Values content goes here...</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 font-amaranth">Visit Us</h2>
        <div className="max-w-md mx-auto">
          <p className="mb-4">123 Bakery Street</p>
          <p className="mb-4">Mon-Sat: 7am - 7pm</p>
          <p>Sunday: 8am - 3pm</p>
        </div>
      </section>
    </div>
  )
}

export default About
import React from 'react'

const ItemCard = ({ title, price, image, description }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src={image} alt={title} className="h-48 w-full object-cover" /></figure>
      <div className="card-body">
        <h2 className="card-title font-amaranth">{title}</h2>
        <p className="line-clamp-2">{description}</p>
        <p className="text-xl font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
import { useCart } from "../../context/CartContext";

const ItemCard = ({ id, title, image, price, onClick }) => {
  const { addToCart } = useCart();

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover cursor-pointer"
          onClick={onClick}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => addToCart({ id, title, image, price })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
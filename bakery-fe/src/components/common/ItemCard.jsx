import { useCart } from "../../context/CartContext";
import { useTranslation } from "react-i18next";

const ItemCard = ({ id, title, image, price, onClick }) => {
  const { addToCart } = useCart();
  const { t } = useTranslation();

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
            {t("Add to Cart")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
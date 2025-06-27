import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../../components/common/ItemCard";
import api from "../../api";
import { useTranslation } from "react-i18next";

const PAGE_SIZE = 9;

const Shop = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();
  // category filter state
  const [category, setCategory] = useState("");
  const filteredItems = category
    ? featuredItems.filter((item) => item.type === category)
    : featuredItems;
  // pagination state
  const [offset, setOffset] = useState(0);
  const paginatedItems = filteredItems.slice(offset, offset + PAGE_SIZE);
  const pageCount = Math.ceil(filteredItems.length / PAGE_SIZE);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      setLoading(true);
      try {
        const response = await api.get("/items", {
          params: { limit: 100 },
        });
        setFeaturedItems(response.data.results || response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching featured items:", err);
        setLoading(false);
      }
    };

    fetchFeaturedItems();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-amaranth">
        {t("Our Products")}
      </h1>

      <div className="flex gap-4 mb-8">
        <select
          className="select select-bordered w-full max-w-xs"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setOffset(0);
          }}
        >
          <option value="">Category</option>
          <option value="bread">{t("Bread")}</option>
          <option value="pastries">{t("Pastries")}</option>
          <option value="cakes">{t("Cakes")}</option>
          <option value="misc">{t("Misc")}</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading &&
          paginatedItems.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              onClick={() => navigate(`/product/${item.id}`)}
            />
          ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          className="btn"
          disabled={offset === 0}
          onClick={() => setOffset(offset - PAGE_SIZE)}
        >
          Previous
        </button>
        {/* Page numbers */}
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className={`btn btn-outline mx-1 ${
              offset / PAGE_SIZE === i ? "btn-primary" : "btn-ghost"
            }`}
            onClick={() => setOffset(i * PAGE_SIZE)}
            disabled={offset / PAGE_SIZE === i}
            style={{ minWidth: 36 }}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="btn"
          disabled={offset + PAGE_SIZE >= filteredItems.length}
          onClick={() => setOffset(offset + PAGE_SIZE)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;

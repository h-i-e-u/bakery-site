import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ItemCard from "../../components/common/ItemCard"
import api from "../../api"
import { useTranslation } from "react-i18next"

const Shop = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const response = await api.get("/items", {
          // params: {
          //   limit: 9, // Limit to 10
          // },
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
      <h1 className="text-4xl font-bold mb-8 font-amaranth">{t("Our Products")}</h1>
      
      <div className="flex gap-4 mb-8">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled defaultValue={true}>Category</option>
          <option>{t("Bread")}</option>
          <option>{t("Pastries")}</option>
          <option>{t("Cakes")}</option>
        </select>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ItemCard components will go here */}
        { !loading && featuredItems.map((item) => (
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
    </div>
  )
}

export default Shop
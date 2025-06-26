import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../../components/common/ItemCard";
import Slider from "../../components/common/Slider";
import api from "../../api";
import { useTranslation } from "react-i18next";
import { formatVND } from "../../utils"; // Assuming you have a utility function for formatting VND

const Home = () => {
  const navigate = useNavigate();
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: t("Welcome to Our Bakery!"),
      description:
        t("Discover our delicious range of baked , from fresh bread to artisanal pastries."),
      buttonText: "Shop Now",
      buttonLink: () => navigate("/shop"),
    },
    {
      image: "https://picsum.photos/200/300?random=1",
      title: t("Custom Cakes"),
      description:
        t("Order a custom cake for your special occasion. We create beautiful and delicious cakes tailored to your needs."),
      buttonText: "Shop Now",
      buttonLink: () => navigate("/shop"),
    },
    {
      image: "https://picsum.photos/200/300?random=2",
      title: t("Fresh Bread"),
      description:
        t("Enjoy our freshly baked bread, made daily with the finest ingredients."),
      buttonText: "Shop Now",
      buttonLink: () => navigate("/shop"),
    },
  ];

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const response = await api.get("/items", {
          params: {
            limit: 4, // Limit to 4 items
          },
        });
        setFeaturedItems(response.data.results || response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching featured items:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFeaturedItems();
  }, []);

  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen">
      <Slider slides={slides} />
      <section className="featured-products py-12">
        <h2 className="text-3xl font-bold text-center mb-8 font-amaranth">
          {t("Featured Products")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {!loading &&
            featuredItems.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
        </div>
        <div className="text-center mt-8">
          <button className="btn btn-primary" onClick={() => navigate("/shop")}>
            {t("View All Products")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

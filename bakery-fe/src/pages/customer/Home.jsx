import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../../components/common/ItemCard";
import Slider from "../../components/common/Slider";
import api from "../../api";

const Home = () => {
  const navigate = useNavigate();
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "Freshly Baked Every Day",
      description:
        "Start your day with our warm, aromatic breads straight from the oven.",
      buttonText: "Shop Now",
      buttonLink: () => navigate("/shop"),
    },
    {
      image: "https://picsum.photos/200/300?random=1",
      title: "Custom Celebration Cakes",
      description:
        "Make your special moments sweeter with our custom-designed cakes.",
      buttonText: "Order Now",
      buttonLink: () => navigate("/shop/cakes"),
    },
    {
      image: "https://picsum.photos/200/300?random=2",
      title: "Artisanal Pastries",
      description:
        "Indulge in our selection of handcrafted pastries and desserts.",
      buttonText: "View Menu",
      buttonLink: () => navigate("/shop/pastries"),
    },
  ];

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const response = await api.get("/items", {
          params: {
            _limit: 4, // Limit to 4 items
          },
        });
        setFeaturedItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching featured items:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFeaturedItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen">
      <Slider slides={slides} />
      <section className="featured-products py-12">
        <h2 className="text-3xl font-bold text-center mb-8 font-amaranth">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {featuredItems.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/shop")}
          >
            View All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

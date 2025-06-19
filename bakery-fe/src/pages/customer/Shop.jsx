import ItemCard from "../../components/common/ItemCard"
import api from "../../api"

const Shop = () => {
  

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-amaranth">Our Products</h1>
      
      <div className="flex gap-4 mb-8">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled defaultValue={true}>Category</option>
          <option>Bread</option>
          <option>Pastries</option>
          <option>Cakes</option>
        </select>
        
        <input type="text" placeholder="Search products" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ItemCard components will go here */}
        <ItemCard
          title="Fresh Baguette"
          image="https://via.placeholder.com/150"
          price={2.99}
        />
      </div>
    </div>
  )
}

export default Shop
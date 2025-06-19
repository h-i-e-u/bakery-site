import ItemCard from "../../components/common/ItemCard"
import Slider from "../../components/common/Slider"

const Home = () => {
  const slides = [
    {
      image: 'https://picsum.photos/200/300',
      title: 'Freshly Baked Every Day',
      description: 'Start your day with our warm, aromatic breads straight from the oven.',
      buttonText: 'Shop Now',
      buttonLink: () => navigate('/shop')
    },
    {
      image: 'https://picsum.photos/200/300?random=1',
      title: 'Custom Celebration Cakes',
      description: 'Make your special moments sweeter with our custom-designed cakes.',
      buttonText: 'Order Now',
      buttonLink: () => navigate('/shop/cakes')
    },
    {
      image: 'https://picsum.photos/200/300?random=2',
      title: 'Artisanal Pastries',
      description: 'Indulge in our selection of handcrafted pastries and desserts.',
      buttonText: 'View Menu',
      buttonLink: () => navigate('/shop/pastries')
    }
  ]
  const items = [
    {
      title: 'Chocolate Croissant',
      price: 2.5,
      image: 'https://picsum.photos/200/300?random=3',
      description: 'A flaky croissant filled with rich chocolate.'
    },
    {
      title: 'Sourdough Bread',
      price: 3.0,
      image: 'https://picsum.photos/200/300?random=4',
      description: 'Our signature sourdough, baked fresh daily.'
    },
    {
      title: 'Vanilla Cupcake',
      price: 1.5,
      image: 'https://picsum.photos/200/300?random=5',
      description: 'A light and fluffy vanilla cupcake with buttercream frosting.'
    },
    {
      title: 'Apple Pie',
      price: 5.0,
      image: 'https://picsum.photos/200/300?random=8',
      description: 'Classic apple pie with a flaky crust and cinnamon-spiced apples.'
    }
  ]
  return (
    <div className="min-h-screen">
      <Slider slides={slides} />
      <section className="featured-products py-12">
        <h2 className="text-3xl font-bold text-center mb-8 font-amaranth">Featured Products</h2>
        {/* ItemCard components will go here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {items.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
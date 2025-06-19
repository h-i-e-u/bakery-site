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
  return (
    <div className="min-h-screen">
      <Slider slides={slides} />
      <section className="featured-products py-12">
        <h2 className="text-3xl font-bold text-center mb-8 font-amaranth">Featured Products</h2>
        {/* ItemCard components will go here */}
      </section>
    </div>
  )
}

export default Home
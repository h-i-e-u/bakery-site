import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
      console.log('Auto sliding to next slide')
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex, ])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500) // Match this with transition duration
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out
              ${index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'}`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold font-amaranth mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">
                  {slide.description}
                </p>
                {slide.buttonText && (
                  <button 
                    onClick={slide.buttonLink} 
                    className="btn btn-primary"
                  >
                    {slide.buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-black/30"
        onClick={handlePrev}
      >
        <Icon icon="mdi:chevron-left" className="text-2xl" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-black/30"
        onClick={handleNext}
      >
        <Icon icon="mdi:chevron-right" className="text-2xl" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${index === currentIndex 
                ? 'bg-primary scale-110' 
                : 'bg-white/50 hover:bg-white/75'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
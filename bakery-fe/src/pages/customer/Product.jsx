import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../api"
import { useTranslation } from "react-i18next"

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { t } = useTranslation()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/items/${id}`)
        setProduct(response.data)
        setLoading(false)
      } catch (err) {
        setError("Product not found")
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <div className="text-center py-8">Loading...</div>
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>
  if (!product) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="product-image">
          <img src={product.image} alt={product.title} className="rounded-lg w-full" />
        </div>
        
        <div className="product-info">
          <h1 className="text-4xl font-bold mb-4 font-amaranth">{product.title}</h1>
          <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
          <p className="mb-6">{product.description}</p>
          
          <div className="flex gap-4 items-center mb-6">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              className="input input-bordered w-20"
            />
            <button className="btn btn-primary">{t("Add to Cart")}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
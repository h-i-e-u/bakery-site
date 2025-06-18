import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/layout/TopBar'
import Footer from './components/layout/Footer'

// Customer Pages
import Home from './pages/customer/Home'
import Shop from './pages/customer/Shop'
import Product from './pages/customer/Product'
import Cart from './pages/customer/Cart'
import Checkout from './pages/customer/Checkout'
import About from './pages/customer/About'
import NotFound from './pages/customer/NotFound'

// Admin Pages
import AdminLogin from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
// import Orders from './pages/admin/Orders'
// import Inventory from './pages/admin/Inventory'
// import Customers from './pages/admin/Customers'
// import Settings from './pages/admin/Settings'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <main className="flex-grow">
          <Routes>
            {/* Customer Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            {/* <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/inventory" element={<Inventory />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/settings" element={<Settings />} /> */}
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

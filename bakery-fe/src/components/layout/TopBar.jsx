import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';


const TopBar = () => {
  const navigate = useNavigate()

return (
    <header className="navbar bg-base-100 shadow-md">
        <div className="navbar-start lg:hidden">
            <div className="dropdown">
                <label tabIndex={0} className="dropdown-default btn btn-primary btn-outline">
                    <Icon icon="mdi:menu" className="text-2xl" />
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-menu mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='dropdown-item'><Link to="/">Home</Link></li>
                    <li className='dropdown-item'><Link to="/shop">Shop</Link></li>
                    <li className='dropdown-item'><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        
        <div className="navbar-end ml-auto flex items-center justify-end gap-4">
          {/* Search Button */}
          <button className="btn btn-ghost btn-circle">
            <Icon icon="mdi:magnify" className="h-5 w-5" />
          </button>

          {/* Cart Button */}
          <button className="btn btn-ghost btn-circle" onClick={() => navigate('/cart')}>
            <div className="indicator">
              <Icon icon="mdi:cart-outline" className="h-5 w-5" />
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </button>
        </div>
    </header>
)
}

export default TopBar
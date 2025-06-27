import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <h2 className="font-amaranth text-2xl">Bakery UTH</h2>
        <p>Baking happiness since 2025</p>
      </div> 
      
      <div>
        <span className="footer-title">Quick Links</span> 
        <a className="link link-hover">Home</a> 
        <a className="link link-hover">Shop</a> 
        <a className="link link-hover">About</a>
      </div> 
      
      <div>
        <span className="footer-title">Contact</span> 
        <p>123 Bakery Street</p>
        <p>contact@banananannana.com</p>
        <p>(555) 123-4567</p>
      </div> 
      
      <div>
        <span className="footer-title">Social</span> 
        <div className="grid grid-flow-col gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:twitter" width="24" height="24" />
          </a>
          <a>
            <Icon icon="mdi:youtube" width="24" height="24" />
          </a>
          <a>
            <Icon icon="mdi:facebook" width="24" height="24" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
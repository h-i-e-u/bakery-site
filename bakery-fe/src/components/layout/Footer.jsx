import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <h2 className="font-amaranth text-2xl">Bakery UTH</h2>
        <p>Baking happiness since 2025</p>
      </div> 
      
      <div>
        <span className="footer-title">{t("Quick Links")}</span> 
        <a className="link link-hover" onClick={() => navigate("/")}>Home</a> 
        <a className="link link-hover" onClick={() => navigate("/shop")}>Shop</a> 
        <a className="link link-hover" onClick={() => navigate("/about")}>About</a>
      </div> 
      
      <div>
        <span className="footer-title">{t("Contact")}</span> 
        <p>70 đường Tô Ký, phường Tân Chánh Hiệp, Quận 12</p>
        <p>email@email.com</p>
        <p>(000) 111-1234</p>
      </div> 
      
      <div>
        <span className="footer-title">{t("Social")}</span> 
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
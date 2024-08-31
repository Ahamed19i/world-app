
import React, { useEffect, useState } from 'react';
import '../styles/components/Footer.css'; // Assurez-vous de créer ce fichier CSS pour le style
import '../styles/global.css'

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = -9852000;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scroll vers le bas
        setIsHidden(true);
      } else {
        // Scroll vers le haut
        setIsHidden(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour Mobile ou défilement négatif
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'événement lors de la suppression du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${isHidden ? 'hidden' : ''}`}>
      <div className="social-media">
        <a href="https://instagram.com/Ahamed19i" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> 
        </a>
        <a href="https://x.com/Ahamed19i" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> 
        </a>
        <a href="https://github.com/Ahamed19i" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> 
        </a>
        <a href="https://www.facebook.com/Ahamed.HassaniMhoma.3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <div className="footer-text">
        <p>© 2024 Ahamed Hassani M'homa. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

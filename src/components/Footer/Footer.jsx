import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="footer-column">
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum tortor eu facilisis.</p>
          </div>
          <div className="footer-column">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Ecommerce Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

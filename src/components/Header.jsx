import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart} from 'react-icons/fa';
import {SiHomeassistantcommunitystore} from 'react-icons/si';
import { useCart } from '../contexts/CartContext';
import Cart from './Cart';
import SearchBar from './SearchBar';

function Header() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-3xl">
          <SiHomeassistantcommunitystore />
        </Link>
        <div className="flex-grow flex justify-center">
          <SearchBar />
        </div>
        <button onClick={toggleCart} className="ml-4 relative">
          <FaShoppingCart className="text-2xl" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
      {isCartOpen && <Cart onClose={toggleCart} />}
    </header>
  );
}

export default Header;

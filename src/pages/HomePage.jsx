import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const shuffled = response.data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 9));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to AmazonClone</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2 truncate">
                {product.title}
              </h2>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link
          to="/products"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded inline-block"
        >
          Browse More Products
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

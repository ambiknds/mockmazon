# Amazon Clone

A full-featured e-commerce website built with React, JavaScript, Tailwind CSS, React Router, Vite.js, and React Icons. This project implements core functionalities similar to Amazon, providing a complete shopping experience from browsing products to checkout.

## Features

- 🏠 Responsive homepage with featured products
- 🔍 Real-time search with product suggestions
- 🛍️ Product listing with grid view
- 📦 Detailed product pages
- 🛒 Shopping cart functionality
- 💳 Multiple payment options:
  - Credit/Debit Card
  - UPI
  - Cash on Delivery
- 🔐 Checkout process
- 📱 Fully responsive design

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- React Router
- Vite.js
- React Icons
- Axios
- Fake Store API

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ambiknds/mockmazon.git
```

2. Navigate to the project directory:
```bash
cd mockmazon
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will open in your default browser at `http://localhost:5173`

## Project Structure

```
mockmazon/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Header.jsx
│   │   └── SearchBar.jsx
│   ├── contexts/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductListingPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   └── PaymentResultPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Features in Detail

### Search Functionality
- Real-time search suggestions
- Product filtering
- Dynamic results display

### Shopping Cart
- Add/Remove items
- Quantity adjustment
- Persistent cart state
- Cart summary

### Checkout Process
- Multiple payment methods
- Address information
- Order summary
- Payment confirmation

## API Integration

This project uses the Fake Store API for product data. The API endpoints used are:
- GET `/products` - Fetch all products
- GET `/products/{id}` - Fetch single product

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React Icons](https://react-icons.github.io/react-icons/) for the icon set


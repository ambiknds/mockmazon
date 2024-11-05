import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function PaymentResultPage() {
  const location = useLocation();
  const success = location.state?.success;

  return (
    <div className="container mx-auto px-6 py-8 text-center">
      {success ? (
        <>
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="mb-8">
            Thank you for your purchase. Your order has been processed
            successfully.
          </p>
        </>
      ) : (
        <>
          <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
          <p className="mb-8">
            We're sorry, but there was an error processing your payment. Please
            try again.
          </p>
        </>
      )}
      <Link
        to="/"
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default PaymentResultPage;

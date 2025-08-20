import React from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from './ProductCard';

const BestSeller = () => {
  const { products } = useAppContext();

  console.log('Products:', products);

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {products && products.length > 0 ? (
          products.slice(0, 5).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;

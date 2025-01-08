import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);


  const imageUrl = Array.isArray(image) && image.length > 0 ? image[0] : '';

  return (
    <Link onClick={() => scrollTo(0, 0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        {imageUrl ? (
          <img className='hover:scale-110 transition ease-in-out' src={imageUrl} alt={name} />
        ) : (
          <div className='bg-gray-300 w-full h-full'></div> // Placeholder when image is missing
        )}
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
}

export default ProductItem;

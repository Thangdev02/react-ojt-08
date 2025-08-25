import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../services/productApi';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  const fetchProductDetail = async () => {
    try {
      const result = await getProductByID(id);
      setProduct(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <div>
      <h1>Product Detail</h1>
      <img src={product.imageProduct} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: {product.price} $</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

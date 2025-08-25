import React, { useEffect, useState } from 'react';
import CardProduct from '../Card';
import { getAllProduct } from '../../services/productApi';
import { Link } from 'react-router-dom';

const ProductList = () => {
    
    const [products, setProducts] = useState([])

    const fecthProduct = async () =>{
        try {
            const result = await getAllProduct()  // loc line of coe
            console.log("result",result);
            setProducts(result)
        } catch (error) {
            console.log(error);
        }
    }
    const navigateDetail = () => {
        // muon xu ly them
        
    } 


    useEffect(() => {
        fecthProduct()
      
    },[])
    return (
        <div>
            {products.map((product) =>(
                <Link key={product.id} to={`/detail/${product.id}`}> // = /product/:id
                <div>
                <img src={product.imageProduct}/>
                <h1>{product.productName}</h1>
                <p>Handcrafted ceramic vase in warm yellow tones</p>
                <div>
                    <p>500.000 vnd</p>
                    <button>Add to cart</button>
                </div>
            <CardProduct/>

            </div>
            </Link>
            ))}
        </div>
    );
};

export default ProductList;
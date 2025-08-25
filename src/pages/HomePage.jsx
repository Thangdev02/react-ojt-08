import React, { useEffect, useState } from 'react';
import Banner from '../components/Home/Banner/Banner';
import OurStory from '../components/Home/OurStory/OurStory';
import ProductList from '../components/Product/ProductList';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const HomePage = () => { //thang nay m ten la HomePage 
  const [products, setProducts] = useState([]) //nhet vo day sau khi call APi
  const [name,setName] = useState('Thang')
  const  fecthProduct = async () =>{
   const result = await axios.get('http://localhost:9999/products').then((response)=>
    response.data
  )
  setProducts(result)
  console.log(result);
  
  }
  useEffect(()=>{
    fecthProduct()
  },[])
  //dependency list // cai list nay se tu chay lai useEffect neu gia tri trong delist bi thay 
  return (
    <div>
      <Banner/>
      <ProductList/>
      <OurStory/>
    <div>
    </div>
    </div>
  );
};

export default HomePage; //xuat ngoai
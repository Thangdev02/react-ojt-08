import React, { createContext, useState } from "react";

export const CartContext = createContext();
//Context rat it khi sai, neu co sai, chi sai de luu
//createContext - tao ra 1 trang giay trang
//tao ra 1 choo de luu san pham chay xuyen suot du an , no cap phep (no cho phep tat ca cac route goi toi no de sai)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); //[{id:1,{id:2}] 
  //neu co item.id === product.id -> map qua mang nay va cap nhat lai so luong

  const addToCart = (product) => {
    // kiểm tra sản phẩm đã có trong giỏ chưa
    const existingProduct = cart.find(item => item.id === product.id); //tim trong mang [{item},{item}] method cua javascript - > true false khi thoa dieu kien
//local,cookies section ( kho trong viec update, refesh lai cai value cua key do)
    if (existingProduct) { // if(existingProduct == true)
      // tăng số lượng nếu có rồi
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          //... o day ke thua -> luu lai tat ca nhung du lieu cua san pham do chi update quanlity hien tai + 1
          // : ? toan tu 3 ngoi ( dieu kien ? true : false)
        )
      );
    } else {
      // thêm mới nếu chưa có
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const updateCartQuanlity = (productId, newQuantity) => {
    
  }
  return (
    <CartContext.Provider value={{ cart, addToCart }}> // no cho phep cac thang con goi toi no de su dung 
      {children} //compoents/ page
    </CartContext.Provider>
  );
};
// nhiem vu cua CartContext -> tao ra 1 cho de luu tru cac san pham xuyen suot du an ( route) va cho phep cac route do co the goi toi cart de xem, su dung add to Cart

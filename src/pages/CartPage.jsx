import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Row, Col, Table, Button, Image, Card, Form } from "react-bootstrap";
import { createOrder, getAllOrder } from "../services/orderApi";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext); //api -> reponse.data -> list san pham []
//deu la mang, deu tra ve nhieu object ben trong
  // xử lý giá: bỏ chữ "vnd" và dấu chấm, rồi parse sang số
  const [fullName,setFullName] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
const navigate = useNavigate();
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.replace(/[^\d]/g, "")) || 0;
  };

  const totalPrice = cart.reduce( //rut lai thanh 1 gia tri duy nhat //sum dung de luu cai tong hien tai 0 {//name,id ,productPrice }
    (sum, item) => sum + parsePrice(item.productPrice) * (item.quantity ?? 1), 
    0
  );

  const handleCheckout = async () => {
//xu ly viec tao order
    //1. la khong can nhap Username
    const user = JSON.parse(localStorage.getItem("user")) 
    //strinfify -> Object -> String 
    //parse -> String -> Object
    //gui di so dien thoai va dia chi
    const orderData = {
      // gui gi 
      userId: user.id,
      fullName: fullName,
      address: address,
      phone: phone, 
      item: cart.map(item => ({ // moi cai san pham  {}
        id: item.id,
        imageProduct: item.imageProduct,
        productName: item.productName,
        productDescription: item.productDescription,
        productPrice: item.productPrice,
      })),
      status: "Cho Xac Nhan",
      total:totalPrice,
      createAt : new Date().toISOString()
    }

    try {
      await createOrder(orderData);
      setCart([]);
      navigate('/thanks')
    } catch (error) {
      console.log(error);
      
    }
  }

useEffect(()=>{
  getAllOrder();
})
  return (
    <Container className="my-5 d-flex flex-column align-items-center">
    <Card
      className="shadow-lg border-0 w-100"
      style={{ maxWidth: "900px", borderRadius: "20px" }}
    >
      <Card.Body className="p-4">
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold">🛒 Your Shopping Cart</h2>
          </Col>
          <Col className="text-end d-flex align-items-center justify-content-end">
            <h4 className="text-success fw-bold mb-0">
              Total: {totalPrice.toLocaleString()} VND
            </h4>
          </Col>
        </Row>

        {/* Form nhập thông tin giao hàng */}
        <Card className="mb-4 border-0 shadow-sm" style={{ borderRadius: 15 }}>
          <Card.Body>
            <h5 className="fw-semibold mb-3">Thông tin giao hàng</h5>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập ten..."
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">w
                <Form.Label>Địa chỉ giao hàng</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập địa chỉ..."
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập số điện thoại..."
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        {/* Table cart */}
        {cart.length > 0 ? (
          <>
            <Table hover responsive className="align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const price = parsePrice(item.productPrice);
                  const quantity = item.quantity ?? 1;
                  return (
                    <tr key={item.id}>
                      <td>
                        <Image
                          src={item.imageProduct}
                          rounded
                          style={{
                            width: 70,
                            height: 70,
                            objectFit: "cover",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                          }}
                        />
                      </td>
                      <td className="fw-semibold">{item.productName}</td>
                      <td>{price.toLocaleString()} VND</td>
                      <td>{quantity}</td>
                      <td className="fw-bold text-success">
                        {(price * quantity).toLocaleString()} VND
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <div className="text-end">
              <Button
                variant="success"
                size="lg"
                className="px-5 py-2 fw-semibold shadow"
                style={{ borderRadius: "30px" }}
                onClick={handleCheckout}
              >
                🚀 Proceed to Checkout
              </Button>
            </div>
          </>
        ) : (
          <p className="text-muted text-center my-4">🛍️ Giỏ hàng đang trống</p>
        )}
      </Card.Body>
    </Card>
  </Container>
  );
};

export default CartPage;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";

const CartPage = () => {
  const { cart } = useContext(CartContext); //api -> reponse.data -> list san pham []
//deu la mang, deu tra ve nhieu object ben trong
  // xử lý giá: bỏ chữ "vnd" và dấu chấm, rồi parse sang số
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.replace(/[^\d]/g, "")) || 0;
  };

  const totalPrice = cart.reduce( //rut lai thanh 1 gia tri duy nhat //sum dung de luu cai tong hien tai 0 {//name,id ,productPrice }
    (sum, item) => sum + parsePrice(item.productPrice) * (item.quantity ?? 1), 
    0
  );

  return (
    <Container className="my-5">
      {/* Header */}
      <Row className="mb-4 align-items-center">
        <Col>
          <h2 className="fw-bold d-flex align-items-center">
            <span role="img" aria-label="cart" className="me-2">🛒</span>
            Your Shopping Cart
          </h2>
        </Col>
        <Col className="text-end">
          <h4 className="mb-2">
            Total: <span className="text-success">{totalPrice.toLocaleString()} VND</span>
          </h4>
          <Button variant="success" size="lg">Proceed to Checkout</Button>
        </Col>
      </Row>

      {/* Empty cart toan tu 3 ngoi (dieu kien ? true : false) */} 
      {cart.length === 0 ? (
        <p className="text-center text-muted fs-5">Your cart is empty 🛍️</p>
      ) : (
        <Table bordered hover responsive className="align-middle shadow-sm">
          <thead className="table-light">
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const price = parsePrice(item.productPrice);
              const quantity = item.quantity ?? 1;
              return (
                <tr key={item.id}>
                  <td style={{ width: "120px" }}>
                    <Image
                      src={item.imageProduct}
                      alt={item.productName}
                      thumbnail
                      style={{ maxHeight: "100px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{item.productName}</td>
                  <td>{price.toLocaleString()} VND</td>
                  <td>{quantity}</td>
                  <td>{(price * quantity).toLocaleString()} VND</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Button variant="outline-danger" size="sm">Remove</Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CartPage;

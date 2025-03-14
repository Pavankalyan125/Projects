import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <Container>
      <h3>Wishlist</h3>
      <Row>
        {wishlist.length === 0 ? <p>No items in wishlist.</p> : 
          wishlist.map((product, index) => (
            <Col key={index} md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="danger" onClick={() => removeFromWishlist(product)}>Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Wishlist;
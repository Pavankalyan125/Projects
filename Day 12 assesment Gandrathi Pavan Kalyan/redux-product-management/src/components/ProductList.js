import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { selectProducts } from "../redux/selectors/productSelectors"; // Import the memoized selector
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const ProductList = ({ addToWishlist }) => {
  const dispatch = useDispatch();

  // Use memoized selector
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts()); // Fetch only if products are empty
    }
  }, [dispatch, products.length]);

  return (
    <Container>
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id} md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button onClick={() => addToWishlist(product)}>Add to Wishlist</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </Row>
    </Container>
  );
};

export default ProductList;
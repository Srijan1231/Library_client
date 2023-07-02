import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import CustomCarousel from "../../components/carousel/CustomCarousel";
import { useSelector } from "react-redux";
import CustomCard from "../../components/Card/CustomCard";
import Container from "react-bootstrap/esm/Container";
import { Form, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);
  return (
    <div>
      <Header />

      <section className="main">
        <div className="hero">
          <CustomCarousel />
        </div>
        <Container className="mt-5">
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <div className="left">{books.length}Books Found</div>
                <div className="right">
                  <Form.Control placeholder="Search book by name" />
                </div>
              </div>
              <div className="book-list d-flex justify-content-between flex-wrap gap-3 mt-5">
                {books.map((item) => (
                  <CustomCard key={item._id} {...item} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

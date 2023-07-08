import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import CustomCarousel from "../../components/carousel/CustomCarousel";
import { useSelector } from "react-redux";
import CustomCard from "../../components/Card/CustomCard";
import Container from "react-bootstrap/esm/Container";
import { Form, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [display, setDisplay] = useState([]);
  const { books } = useSelector((state) => state.bookInfo);
  useEffect(() => {
    setDisplay(books);
  }, [books]);
  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredBooks = books.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplay(filteredBooks);
  };

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
                <div className="left">{display.length}Books Found</div>
                <div className="right">
                  <Form.Control
                    placeholder="Search book by name"
                    onChange={handleOnSearch}
                  />
                </div>
              </div>
              <div className="book-list d-flex justify-content-between flex-wrap gap-3 mt-5">
                {display.map((item) => (
                  <Link to={`/books/${item._id}`}>
                    <CustomCard key={item._id} {...item} />
                  </Link>
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

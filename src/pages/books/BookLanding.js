import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";

const BookLanding = () => {
  const { _id } = useParams();
  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);
  const { thumbnail, title, author, year, summary } =
    books.find((item) => item._id === _id) || {};

  return (
    <div>
      <Header />
      <section className="main mt-5">
        <Container>
          <Row>
            <Col md="5">
              <img src={thumbnail} alt={title} width="100%" />
            </Col>
            <Col md="7">
              <h1>{title}</h1>
              <p>
                {author}-{year}
              </p>
              <p>5-stars</p>
              <p>{summary}</p>
              {user?._id ? (
                <div className="d-grid">
                  <Button variant="dark">Burrow now</Button>
                </div>
              ) : (
                <Link to="/signin" className="nav-link">
                  <div className="d-grid">
                    <Button variant="dark">Login to Burrow</Button>
                  </div>
                </Link>
              )}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h3>Reviews</h3>
              <hr />
              <div className="review-list">
                <div className="review pt-4 px-4 gap-3">
                  <div className="left-name">SD</div>
                  <div className="right-review p-2 shadow-lg px-4 gap-3">
                    <h3>Amazing book loved</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex iure facere adipisci error beatae assumenda
                      consequuntur non maxime nulla dicta illum magni earum id
                      delectus iusto ullam, dolorum rerum quis. A ea
                      voluptatibus nam ipsum modi accusamus harum porro debitis
                      odit rerum, at cum soluta perspiciatis sint velit
                      adipisci, veritatis reiciendis, neque repellat. Porro,
                      optio velit. Veniam eius voluptatibus corrupti! Aliquam
                      saepe distinctio pariatur quod accusantium, doloribus
                      labore perspiciatis dolor. Quisquam amet dolorem
                      architecto quasi laboriosam accusamus sed neque! Officia,
                      obcaecati rerum minus possimus beatae qui ratione dicta
                      recusandae voluptate?
                    </p>
                    <p>-Srijan</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default BookLanding;

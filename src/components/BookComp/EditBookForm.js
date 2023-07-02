import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../layout/UserLayout";
import {
  deleteBookAction,
  updateBookAction,
} from "../../pages/books/BookAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const EditBookForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const { books } = useSelector((state) => state.bookInfo);
  const { _id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((item) => item._id === _id);
      selectedBook?._id && setForm(selectedBook);
    }
  }, [_id, form._id, books]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnUpdate = async (e) => {
    e.preventDefault();
    if (window.confirm("Are You Sure")) {
      const isUpdated = dispatch(updateBookAction(form));
      isUpdated && navigate("/books");
    }

    console.log(form);
  };
  const handleOnDelete = async () => {
    if (window.confirm("Are You Sure")) {
      const isDeleted = dispatch(deleteBookAction(_id));
      isDeleted && navigate("/books");
    }
  };

  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Enter Name",
      required: true,
      value: form.title,
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Enter Author Name",
      required: true,
      value: form.author,
    },
    {
      label: "Year ",
      name: "year",
      type: "number",
      placeholder: "2019",
      required: true,
      value: form.year,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "photo",
      placeholder: "http//....",
      required: true,
      value: form.thumbnail,
    },
    {
      label: "Book Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "Book Summary ......",
      required: true,
      rows: 10,
      value: form.summary,
    },
  ];
  return (
    <UserLayout title="Add New Book">
      {user?.role !== "admin" ? (
        <h1>Unauthorize Access</h1>
      ) : (
        <div className="py-3">
          <Link to="/books">
            <Button variant="secondary"> Back </Button>
          </Link>
          <Form onSubmit={handleOnUpdate}>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
            <div className="d-grid ">
              <Button variant="primary" type="submit">
                Update
              </Button>
            </div>
          </Form>
          <div className="d-grid py-2">
            <Button variant="danger" type="submit" onClick={handleOnDelete}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </UserLayout>
  );
};

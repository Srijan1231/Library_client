import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../layout/UserLayout";
import { postBookAction } from "../../pages/books/BookAction";
export const NewBookForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postBookAction(form));
    console.log(form);
  };

  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Enter Name",
      required: true,
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Enter Author Name",
      required: true,
    },
    {
      label: "Year ",
      name: "year",
      type: "number",
      placeholder: "2019",
      required: true,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "photo",
      placeholder: "http//....",
      required: true,
    },
    {
      label: "Book Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "Book Summary ......",
      required: true,
      rows: 10,
    },
  ];
  return (
    <UserLayout title="Add New Book">
      {user?.role !== "admin" ? (
        <h1>Unauthorize Access</h1>
      ) : (
        <div className="py-3">
          <Form onSubmit={handleOnSubmit}>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
            <div className="d-grid ">
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </div>
          </Form>
        </div>
      )}
    </UserLayout>
  );
};

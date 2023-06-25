import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import { Button } from "react-bootstrap";
import CustomInput from "../../custom-input/CustomInput.js";
import { Header } from "../../layout/Header.js";
import { Footer } from "../../layout/Footer.js";

const inputs = [
  {
    label: "First Name",
    name: "fName",
    required: true,
    placeholder: "Sam",
    type: "text",
  },
  {
    label: "Last Name",
    name: "lName",
    required: true,
    placeholder: "Smith",
    type: "text",
  },
  {
    label: "Email",
    name: "Email",
    required: true,
    placeholder: "Sam",
    type: "text",
  },
  {
    label: "Phone",
    name: "phone",
    required: true,
    placeholder: "041562783",
    type: "tel",
  },
  {
    label: "Address",
    name: "address",
    required: "true",
    placeholder: "222 george st, sydney",
    type: "text",
  },
];
const SignUp = () => {
  const [form, setForm] = useState({});

  const handldeOnChange = (e) => {
    const { name, value } = e.target;

    console.log(form);
  };
  return (
    <>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg">
          <h1> Add New Admin</h1>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;

import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import CustomInput from "../../custom-input/CustomInput";
import { signInAdminAction } from "./userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [form, setForm] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  user?._id && navigate("/dashboard");

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAdminAction(form));
  };
  const inputs = [
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Sam@smith.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
    },
  ];
  return (
    <div>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg" onSubmit={handleOnSubmit}>
          <h1 className="text-center">Welcome Admin</h1>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>

      <Footer />
    </div>
  );
};

export default Signin;

import React from "react";
import Form from "react-bootstrap/Form";
const CustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};
export default CustomInput;
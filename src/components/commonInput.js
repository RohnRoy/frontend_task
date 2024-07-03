
import React, { useState, useEffect } from "react";
import { Input, Button, Form } from "antd";
import "./commonInput.css";

const InputHandler = ({ onSubmit, currentUser, onResetEdit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (currentUser) {
      form.setFieldsValue(currentUser);
    }
  }, [currentUser]);

  const onFinish = (values) => {
    onSubmit(values);
    form.resetFields();
    onResetEdit();
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  return (
    <div id="form-container">
      <Form
        form={form}
        name="userForm"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {currentUser ? "Update User" : "Add User"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InputHandler;

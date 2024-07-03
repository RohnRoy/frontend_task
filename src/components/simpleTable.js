
import React from "react";
import { Table, Button, Popconfirm } from "antd";

const SimpleTable = ({ dataSource, onDelete, onUpdate }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Popconfirm
            title="Are you sure delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
          <Button
            type="primary"
            onClick={() => onUpdate({ id: record.id, name: "Updated Name", email: "updated@example.com" })}
          >
            Edit
          </Button>
        </span>
      ),
    },
  ];

  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
};

export default SimpleTable;

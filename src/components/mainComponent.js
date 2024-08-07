
import React, { useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, updateUser, deleteUser } = props;

  const handleSubmit = ({ name, email }) => {
    addUser({ name, email });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} />
      <SimpleTable
        dataSource={userState.users}
        onDelete={deleteUser}
        onUpdate={updateUser}
      />
    </div>
  );
}

export default MainComponent;

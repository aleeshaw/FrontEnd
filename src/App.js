import React, { useState, Fragment } from "react";
// import EnhancedUserForm from "./components/UserForm";
import UpdateTable from "./components/table/UsersTable";
import { Provider } from "react-redux";
import AddUser from "./components/forms/AddUser";
import EditForm from "./components/forms/EditForm";
import store from "./components/store/store";

function App() {
  // Data
  const usersData = [
    // { id: 1, name: "Tania", username: "floppydiskette" },
    // { id: 2, name: "Craig", username: "siliconeidolon" },
    // { id: 3, name: "Ben", username: "benisphere" }
    { id: 1, name: "", description: "", price: "", location: "", category: "" }
  ];

  const initialFormState = {
    id: null,
    name: "",
    description: "",
    price: "",
    location: "",
    category: ""
  };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <Provider store={store}>
      <div className="App">
        {/* <EnhancedUserForm /> */}
        {/* <UpdateItems />
      <UpdateTable /> */}
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUser addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UpdateTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </Provider>
  );
}

export default App;

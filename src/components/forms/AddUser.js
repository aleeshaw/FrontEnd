import React, { useState } from "react";

const AddUser = props => {
  const initialFormState = {
    user_id: null,
    name: "",
    description: "",
    price: "",
    location: "",
    category: ""
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={user.description}
        onChange={handleInputChange}
      />
      <label>Price</label>
      <input
        type="float"
        name="price"
        value={user.price}
        onChange={handleInputChange}
      />
      <label>Location</label>
      <input
        type="text"
        name="location"
        value={user.location}
        onChange={handleInputChange}
      />
      <label>Category</label>
      <input
        type="text"
        name="category"
        value={user.category}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;

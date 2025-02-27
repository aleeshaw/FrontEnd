import React, { useState, Fragment } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import AddItemForm from './AddItemForm';
import EditItemForm from "./EditItemForm";
import ItemTable from "../tables/ItemTable";
import '../UserItems.css';

const UserItems = () => {

  const itemsData = [
    { id: 1, name: "Eggs", description: "Animal Products", price: "$2.00" },
    { id: 2, name: "Goat Meat", description: "Livestock", price: "$10.00" },
    {
        id: 3,
        name: "Exotic Chicken",
        description: "Poultry",
        price: "$6.50"
    }
  ];

  const initialFormState = { id: null, name: "", description: "", price: "" };

  // Setting state
  const [items, setItems] = useState(itemsData);
  const [currentItem, setCurrentItem] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addItem = item => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const deleteItem = id => {
    setEditing(false);

    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id, updatedItem) => {
    setEditing(false);

    setItems(items.map(item => (item.id === id ? updatedItem : item)));
  };

  const editRow = item => {
    setEditing(true);

    setCurrentItem({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price
    });
  };

  return (
    <div className="section">
        <h1>African Marketplace Product List</h1>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route
            exact
            path="/loginaftersignup"
            render={props => <Login register={true} />}
        />
        <div className="flex-row">
            <div className="flex-large">
                {editing ? (
                    <Fragment>
                        <h2>Edit item</h2>
                        <EditItemForm
                            editing={editing}
                            setEditing={setEditing}
                            currentItem={currentItem}
                            updateItem={updateItem}
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <h2>Add item</h2>
                        <AddItemForm addItem={addItem} />
                    </Fragment>
                )}
            </div>
            <div className="flex-large">
                <h2>My items</h2>
                <ItemTable
                    items={items}
                    editRow={editRow}
                    deleteItem={deleteItem}
                />
            </div>
        </div>
    </div>
  );
};

export default UserItems;
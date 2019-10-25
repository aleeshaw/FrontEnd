import React, { useEffect, useState } from 'react';
import Axios from 'axios';


const Feed = () => {

const [items, setItems] = useState([]);
useEffect(() => {
  const getItems = () => {
    Axios
      .get(`https://lbs-african-marketplace.herokuapp.com/items`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  getItems();
},[]);

  return (
    <>
    <h1>hello</h1>
    </>
  );
};

export default Feed;
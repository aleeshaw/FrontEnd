import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { 
  CardGroup,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardImg
 } from 'reactstrap';
import '../Feed.css';
import { Link } from 'react-router-dom';
import { itemData } from './itemData';

const Feed = () => {
  document.body.style.backgroundColor = 'white';
// const [items, setItems] = useState([]);
// useEffect(() => {
//   const getItems = () => {
//     Axios
//       .get(
//         `https://lbs-african-marketplace.herokuapp.com/items`,
//         {headers: {
//           "Authorization": `Bearer ${props.token}`
//         }}
//         )
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   getItems();
// },[props.token]);

  useEffect(() => {
    Axios
      .get("")
  })

  return (
    <>
    <Link to="/dashboard"><button>Dash</button></Link>
    <h1>User Community Market</h1>

    <CardGroup>
      {itemData.map(item => (
        <Card key={item.id}>
          <CardBody>
            <CardImg src={item.URL} alt={item.name}/>
            <CardTitle>Item: {item.name}</CardTitle>
            <CardSubtitle>Description: {item.description}</CardSubtitle>
            <CardSubtitle>Location: {item.location}</CardSubtitle>
            <CardSubtitle>Price: {item.price}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
    </>
  );
};

export default Feed;


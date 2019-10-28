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
  document.body.style.backgroundColor = '#1F2041';
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


  return (
    <>
    <Link to="/dashboard"><button >My Items</button></Link>
    <div>
    <h1 className="feed-header">User Community Market</h1>

    <CardGroup width="100%" className="card-container">
      {itemData.map(item => (
        <div key={item.id}>
        <Card body inverse style={{backgroundColor: '#586F7C', borderColor: '#586F7C'}} className="item-card">
          
            <CardImg top width="100%" src={item.URL} alt={item.name}/>
            <CardTitle>Item: {item.name}</CardTitle>
            <CardSubtitle>Description: {item.description}</CardSubtitle>
            <CardSubtitle>Location: {item.location}</CardSubtitle>
            <CardSubtitle>Price: {item.price}</CardSubtitle>
          
        </Card>
        </div>
      ))}
    </CardGroup>
    </div>
    </>
  );
};

export default Feed;


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

const Feed = () => {

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

  const itemsData = [
    {
      "id": 1,
      "name": "eggs",
      "description": "seed testing",
      "price": "4",
      "location": "Sauti",
      "category": "cooking",
      "URL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdHhqJOD5CGPHT8KJtpbXCIxTfoAo5RLGxVCxnxGkYKvu1NQzhg",
      "user_id": 1
    },
    {
      "id": 3,
      "name": "test",
      "description": "test",
      "price": "1.89",
      "location": null,
      "category": null,
      "URL": null,
      "user_id": 4
    },
    {
      "id": 4,
      "name": "flour",
      "description": "wheat",
      "price": "1.89",
      "location": null,
      "category": null,
      "URL": null,
      "user_id": 4
    }
  ]

  return (
    <>
    <h1>Feed</h1>

    <CardGroup>
      {itemsData.map(item => (
        <Card key={item.id}>
          <CardBody>
            <CardImg src={item.URL} alt={item.name}/>
            <CardTitle>{item.name}</CardTitle>
            <CardSubtitle>{item.description}</CardSubtitle>
            <CardSubtitle>{item.location}</CardSubtitle>
            <CardSubtitle>{item.price}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
    </>
  );
};

export default Feed;


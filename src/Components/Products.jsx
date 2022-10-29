import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ({items}) => {
  return ( 
    <div className="Products">
      {items.map(product => (
        <Card style={{ width: '18rem', margin: "1em" }} display='flex' text-align="center">
          <Card.Img variant="top" src={product.image}/>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              ${product.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  );

}

export default Products;
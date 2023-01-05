import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { height } from '@mui/system';
function MovieCard ({Data}){
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Data.posterUrl} />
      <Card.Body>
        <Card.Title>{Data.title}</Card.Title>
        <Card.Text>
          {Data.desription}
        </Card.Text>  
        <Button variant="primary">Go </Button>
      
        <Rating name="read-only" value={Data.rating} max={10} readOnly />
      </Card.Body>
    </Card>
    </div>
  );
}
export default MovieCard;

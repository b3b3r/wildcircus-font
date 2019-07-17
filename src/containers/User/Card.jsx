import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

function CardCircus({ name, price, place, url }) {
  return (
    <div className="Card">
      <div>
        <Card>
          <CardTitle>{name}</CardTitle>
          <CardImg top width="50%" src={url} alt={name} />
          <CardBody>
            <CardText>{`${price}€`}</CardText>
            <CardText>{place}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default CardCircus;

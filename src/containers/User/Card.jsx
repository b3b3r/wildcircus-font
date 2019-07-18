import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

function CardCircus({ name, price, place, url, theme }) {
  return (
    <div className="Card">
      <div>
        <Card>
          <CardTitle>{name}</CardTitle>
          <CardImg top width="50%" src={url} alt={name} />
          <CardBody>
            <CardText>{`${price}€`}</CardText>
            <CardText>{place}</CardText>
            {theme.map((theme, index) => <li key={index}>{theme}</li>)}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default CardCircus;

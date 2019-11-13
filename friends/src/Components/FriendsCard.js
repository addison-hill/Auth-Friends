import React from 'react';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';

const FriendsCard = props => {
    return (
        <Card className="card">
            <CardBody>
                <CardTitle>Name: {props.friends.name}</CardTitle>
                <CardText>Age: {props.friends.age}</CardText>
                <CardText>Email: {props.friends.email}</CardText>
            </CardBody>
        </Card>
    );
};

export default FriendsCard;
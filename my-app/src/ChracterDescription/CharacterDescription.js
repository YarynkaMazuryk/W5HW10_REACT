import React, { PureComponent } from 'react'
import { CardText, CardBody } from 'reactstrap';

class CharacterDescription extends PureComponent {
    render() {
        return (
            <CardBody>
                <CardText>Name: {this.props.name} </CardText>
                <CardText>Gender: {this.props.gender} </CardText>
                <CardText>Status: {this.props.status} </CardText>
                <CardText>Species: {this.props.species}</CardText>
            </CardBody>
        )
    }
}

export default CharacterDescription;
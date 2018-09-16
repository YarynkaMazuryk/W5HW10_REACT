import React, { PureComponent } from 'react'
import { CardImg} from 'reactstrap';

class CharacterPicture extends PureComponent {
    render () {
        return (
            <CardImg src = {this.props.image} alt='images charecter'/>
        )
    }
}

export default CharacterPicture;




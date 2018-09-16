
import { Card, Button } from 'reactstrap';
import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import CharacterPicture from '../CharacterPicture/CharacterPicture';
import CharacterDescription from '../ChracterDescription/CharacterDescription';
import './character.css';


class Character extends PureComponent {
    constructor() {
        super();
        this.state = {
            users: [],
            page: 1
        }
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }
    loadUsers(page) {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(result => result.json()
            .then(data => {
                this.setState({ users: data.results })
            }))
    }

    nextPage() {
        this.setState({
            page: this.state.page + 1,
        })
        console.log(this.state.page);
        this.loadUsers(this.state.page);
    }

    prevPage() {
        if (this.state.page <= 0) {
            this.setState({
                page: 1,
            })
            this.loadUsers(this.state.page);
        } else {
            this.setState({
                page: this.state.page - 1,
            })
            this.loadUsers(this.state.page);
            console.log(this.state.page);
        }
    }
    getUser() {
        if (this.state.users.length) {
            return this.getUsersList()
        } else {
            return null;
        }
    }
    getUsersList() {
        return this.state.users.map(user => {
            return <Card key = {user.id}>
                <CharacterPicture image={user.image} />
                <CharacterDescription name={user.name} gender={user.gender} status={user.status} species={user.species}/>
            </Card>
        })
    }
    render() {
        return (
            <div className='cardContainer'>
                {this.getUser()}
                <Button className='prev_button' outline color="primary" onClick={this.prevPage}>Prev</Button>
                <Button className='next_button' outline color="primary" onClick={this.nextPage}>Next</Button>
            </div>
        )
    }

}

export default Character;
import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import axios from 'axios';
import firebase from 'firebase';

class Admin extends Component {

    state={
        email:'',
        password:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post()

        //clear form state
        this.setState({
            email: '',
            password: ''
        });
    }

    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        const { email, password } = this.state;
        
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field required>
                        <label>Email</label>
                        <input type="email" required placeholder="Email" name='email' value={email} onChange={this.handleInputChange}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <input type="password" required placeholder="Password" name='password' value={password} onChange={this.handleInputChange}/>
                    </Form.Field>
                    <Button primary type='submit' disabled={!this.state.email || !this.state.password}>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default Admin;
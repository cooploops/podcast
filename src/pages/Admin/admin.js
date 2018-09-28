import React, { Component } from 'react';
import { Button, Form, Container, Input } from 'semantic-ui-react';
import axios from 'axios';
import firebaseApp from '../../base';

class Admin extends Component {

    state={
        email:'',
        password:'',
        authenticated: false,
        currentUser: null
    }
    fileInput = React.createRef();

    handleSubmit = (e) => {
        const {email, password} = this.state;
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log(error);
            });

        //clear form state
        this.setState({
            email: '',
            password: ''
        });
    }

    handleFileSubmit = (e) => {
        e.preventDefault();
        console.log(this.fileInput.current.files[0]);
        console.log(e.target);
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

    componentWillMount() {
        firebaseApp.auth().onAuthStateChanged(user => {
            if(user) {
                this.setState({
                    authenticated: true,
                    currentUser: user
                })
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null
                })
            }
        })
    }

    render() {
        const { email, password, authenticated, currentUser } = this.state;

        if(!authenticated) {
            return (
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field required>
                            <label>Email</label>
                            <input type="email" required placeholder="Email" name='email' value={email} onChange={this.handleInputChange}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <Input type="password" required placeholder="Password" name='password' value={password} onChange={this.handleInputChange}/>
                        </Form.Field>
                        <Button primary type='submit' disabled={!this.state.email || !this.state.password}>Submit</Button>
                    </Form>
                </Container>
            )
        }
        if(authenticated && currentUser) {
            return (
                <Container>
                    <p>Up here will go a view of all the files uploaded</p>
                    <p>Will also need a button to Delete and Edit</p>
                    <p>Will include instructions on naming format for files as well here</p>
                    <Form onSubmit={this.handleFileSubmit}>
                        <Form.Field>
                            <label>Upload File(s)</label>
                            <input type="file" id="file" name="file" ref={this.fileInput}/>
                        </Form.Field>
                        <Button primary type='submit'>Upload</Button>
                    </Form>
                </Container>
            )
        }
    }
}

export default Admin;
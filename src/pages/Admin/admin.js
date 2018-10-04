import React, { Component } from 'react';
import { Button, Form, Container, Input, Progress } from 'semantic-ui-react';
import firebaseApp from '../../base';
import firebase from 'firebase';

class Admin extends Component {

    fileInput = React.createRef();
    uploadTask;
    db = firebaseApp.firestore();
    firebaseStorage = firebaseApp.storage();
    storageRefPoint = this.firebaseStorage.ref();

    constructor(props) {
        super(props);
        this.db.settings({
            timestampsInSnapshots: true
        });
    }

    state = {
        email: '',
        password: '',
        authenticated: false,
        currentUser: null,
        uploadBtnDisabled: true,
        uploadState: '',
        uploadStart: false,
        uploadSuccess: false,
        showProgressBar: false,
        percentComplete: 0,
        podcastMetaData: null,
        episodeTitle: '',
        episodeNumber: '',
        episodeDescription: '',
        episodeDownloadURL: ''
    }

    handleSubmit = (e) => {
        const { email, password } = this.state;
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

        this.uploadTask = this.storageRefPoint.child(`/user/${this.state.currentUser.uid}/podcasts`).put(this.fileInput.current.files[0]);
        this.uploadTask.on('state_changed', (snapshot) => {
            const percentProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                showProgressBar: true,
                percentComplete: percentProgress
            });
            switch (snapshot.state) {
                case firebase.storage.TaskState.RUNNING:
                    this.setState({
                        uploadState: 'Upload in Progress',
                        uploadStart: true
                    });
                    break;
                case firebase.storage.TaskState.PAUSED:
                    this.setState({
                        uploadState: 'Upload Pause'
                    });
                    break;
                case firebase.storage.TaskState.CANCELED:
                    this.setState({
                        uploadState: 'Upload Cancelled'
                    });
                    break;
                case firebase.storage.TaskState.SUCCESS:
                    this.setState({
                        uploadState: 'Upload Complete',
                        uploadSuccess: true
                    });
                    break;
            }
        }, (error) => {
            console.log(error);
            alert('an error occurred during upload, let TJ know so he can investigate');
        }, () => {
            console.log('upload complete');
            this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                this.setState({
                    episodeDownloadURL: downloadURL
                });
            });
        });
    }

    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    signOut = () => {
        firebaseApp.auth().signOut().catch(error => {
            console.log(error);
        })
    }

    componentWillMount() {
        firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user
                });
                // perform grabbing of meta data of podcasts here

                this.storageRefPoint.child(`/user/${this.state.currentUser.uid}/podcasts`).getMetadata()
                    .then(metaData => {
                        this.setState({
                            podcastMetaData: metaData
                        })
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

        if (authenticated && currentUser) {
            return (
                <Container>
                    <Button primary onClick={this.signOut}>Sign Out</Button>
                    <p>Up here will go a view of all the files uploaded</p>
                    <p>Will also need a button to Delete and Edit</p>
                    <p>Will include instructions on naming format for files as well here</p>
                    {this.state.uploadStart &&
                        <Progress percent={this.state.percentComplete} indicating success={this.state.uploadSuccess} progress={this.state.percentComplete}>
                            {this.state.uploadState}
                        </Progress>
                    }
                    <Form onSubmit={this.handleFileSubmit}>
                        <Form.Group>
                            <Form.Input type="text"
                                label="Episode Title"
                                name="episodeTitle"
                                placeholder="Episode Title Here"
                                width={13}
                                required 
                                onChange={this.handleInputChange}/>
                            <Form.Input type="number"
                                label="Episode Number"
                                name="episodeNumber"
                                placeholder="Episode Number Here"
                                width={3}
                                required
                                onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.TextArea label="Episode Description"
                                name="episodeDescription"
                                placeholder="We talk about..."
                                width={16}
                                required
                                onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Field width={8}>
                            <label>Upload File(s)</label>
                            <input type="file" id="file" name="file" ref={this.fileInput} onChange={() => this.setState({ uploadBtnDisabled: false })} />
                        </Form.Field>
                        <Button primary type='submit' disabled={this.state.uploadBtnDisabled}>Upload</Button>
                    </Form>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field required>
                            <label>Email</label>
                            <input type="email" required placeholder="Email" name='email' value={email} onChange={this.handleInputChange} />
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <Input type="password" required placeholder="Password" name='password' value={password} onChange={this.handleInputChange} />
                        </Form.Field>
                        <Button primary type='submit' disabled={!this.state.email || !this.state.password}>Submit</Button>
                    </Form>
                </Container>
            )
        }
    }
}

export default Admin;
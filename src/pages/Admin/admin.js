import React, { Component } from 'react';
import { Button, Form, Container, Input, Progress } from 'semantic-ui-react';
import firebaseApp from '../../base';
import firebase from 'firebase';
import Table from '../../components/table';

class Admin extends Component {

    fileInput = React.createRef();
    // db = firebaseApp.firestore();
    // firebaseStorage = firebaseApp.storage();
    // storageRefPoint = this.firebaseStorage.ref();

    constructor(props) {
        super(props);
        firebaseApp.firestore().settings({
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
        podcastData: null,
        episodeTitle: '',
        episodeNumber: '',
        episodeDescription: '',
        episodeDownloadURL: ''
    }

    handleLogin = (e) => {
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
        // console.log(this.storageRefPoint, this.state.currentUser.uid, this.fileInput.current.files[0]);
        const uploadTask = firebaseApp.storage().ref().child(`user/${this.state.currentUser.uid}/podcasts/${this.state.episodeNumber}`).put(this.fileInput.current.files[0]);
        uploadTask.on('state_changed', (snapshot) => {
            // calc percent progress
            const percentProgress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            // show progress bar and store percent complete
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
                default:
                    this.setState({
                        uploadState: '',
                        uploadStart: false,
                        uploadSuccess: false,
                        percentComplete: 0,
                        showProgressBar: false
                    });
                    break;
            }
        }, (error) => {
            console.log(error);
            alert('an error occurred during upload, let TJ know so he can investigate');
        }, () => {
            console.log('upload complete');
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                console.log(downloadURL)
                this.setState({
                    episodeDownloadURL: downloadURL
                });
                firebaseApp.firestore().collection("users").doc(`${this.state.currentUser.uid}`).collection("podcasts").add({
                    title: this.state.episodeTitle,
                    episode: this.state.episodeNumber,
                    description: this.state.episodeDescription,
                    downloadUrl: this.state.episodeDownloadURL
                }).then(() => alert('Document was saved to the database'))
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
                // perform grabbing of data of podcasts here
                firebaseApp.firestore().collection("users").doc(`${this.state.currentUser.uid}`).collection("podcasts").orderBy('episode')
                    .get()
                    .then(allDocs => {
                        console.log(allDocs);
                        console.log(allDocs.docs);
                        this.setState({podcastData:allDocs.docs})
                        // allDocs.forEach(doc => {
                        //     console.log('id', doc.id);
                        //     console.log('data', doc.data());
                        // })
                    })
                    .catch(error => console.log('Error getting documents: ', error));
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
                    
                    <Table podcastdata={this.state.podcastData}></Table>
            
                    {this.state.uploadStart &&
                        <Progress percent={this.state.percentComplete} indicating success={this.state.uploadSuccess} progress>
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
                    <Form onSubmit={this.handleLogin}>
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
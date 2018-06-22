import React, {Component} from 'react';
import Banner from '../../components/banner';
import SocialMedia from '../../components/social_media';
import ShortList from '../../components/shortList';
import VideoModal from '../../components/modal';
import axios from "axios";

import {Grid, Header} from 'semantic-ui-react';

class Home extends Component {
    state = {
        videos:[],
        modalOpen: false,
        selectedVideo: null
    };

    handleOpenModal = () => this.setState({modalOpen: true});

    handleCloseModal = () => this.setState({modalOpen: false});

    componentDidMount() {
        axios.get("https://us-central1-cloudfunctionstest-95896.cloudfunctions.net/Ollie")
        .then(result => {
            this.setState({videos:result.data});
            console.log(this.state.videos)
        })
        .catch(error => console.log(error));
    }

    render() {
        const imagePaths = ["http://placekitten.com/g/800/500","http://placekitten.com/g/800/500","http://placekitten.com/g/800/500"]
        return(
            <div>
                <VideoModal 
                modalState={this.state.modalOpen}
                video={this.state.selectedVideo}
                close={this.handleCloseModal}/>
                <Banner images={imagePaths} />
                <Grid className='mt-3' divided columns={3}>
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <SocialMedia />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as='h3' textAlign='center'>
                                Most Recent
                            </Header>
                            <ShortList podcasts={this.state.videos}
                            onVideoSelect={selectedVideo => {
                                this.setState({selectedVideo, modalOpen:true});
                                }
                            }/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Header as='h3' textAlign='center'>
                                Most Popular
                            </Header>
                            <ShortList podcasts={this.state.videos}
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Home;
import React, { Component } from 'react';
import Banner from '../../components/banner';
import SocialMedia from '../../components/social_media';
import ShortList from '../../components/shortList';
import VideoModal from '../../components/modal';
import {MyConsumer} from '../../context/myProvider';


import { Grid, Header } from 'semantic-ui-react';

class Home extends Component {

    render() {
        const imagePaths = ["http://placekitten.com/g/800/500", "http://placekitten.com/g/800/500", "http://placekitten.com/g/800/500"]
        return (
            <div>
                <MyConsumer>
                    {(context) => (
                        <React.Fragment>
                            <VideoModal
                                modalState={context.state.modalOpen}
                                video={context.state.selectedVideo}
                                close={context.state.handleCloseModal} />
                            <Banner images={imagePaths} />
                            <Grid stackable divided centered>
                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <SocialMedia />
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Header as='h3' textAlign='center'>
                                            Most Recent
                                        </Header>
                                        <ShortList podcasts={context.state.videos}
                                            onVideoSelect={context.state.selectVideo}
                                            />
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Header as='h3' textAlign='center'>
                                            Most Popular
                                        </Header>
                                        <ShortList podcasts={context.state.videos}
                                            onVideoSelect={context.state.selectVideo}
                                            />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </React.Fragment>
                    )}
                </MyConsumer>
            </div>
        )
    }
}

export default Home;
import React, { Component } from 'react';
import Banner from '../../components/banner';
import SocialMedia from '../../components/social_media';
import ShortList from '../../components/shortList';
import VideoModal from '../../components/modal';
import {MyConsumer} from '../../context/myProvider';

import { Grid, Header, Responsive } from 'semantic-ui-react';

class Home extends Component {

    render() {
        const imagePaths = ["http://placekitten.com/g/700/400", "http://placekitten.com/g/700/400", "http://placekitten.com/g/700/400"]
        return (
            <div>
                <MyConsumer>
                    {(context) => (
                        <React.Fragment>
                            <VideoModal
                                modalState={context.state.modalOpen}
                                video={context.state.selectedVideo}
                                close={context.state.handleCloseModal} />
                            <Responsive as={Grid} stackable divided centered container={true}>
                                <Grid.Row>
                                    <Grid.Column columns={1}>
                                        <Banner images={imagePaths} />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={3}>
                                    <Grid.Column width={4}>
                                        <SocialMedia />
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Header as='h3' textAlign='center'>
                                            Most Recent
                                        </Header>
                                        <ShortList podcasts={context.state.videos}
                                            onVideoSelect={context.state.selectVideo}
                                            />
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Header as='h3' textAlign='center'>
                                            Most Popular
                                        </Header>
                                        <ShortList podcasts={context.state.videos}
                                            onVideoSelect={context.state.selectVideo}
                                            />
                                    </Grid.Column>
                                </Grid.Row>
                            </Responsive>
                        </React.Fragment>
                    )}
                </MyConsumer>
            </div>
        )
    }
}

export default Home;
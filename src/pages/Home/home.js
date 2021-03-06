import React, { Component } from 'react';
import Banner from '../../components/banner';
import SocialMedia from '../../components/social_media';
import ShortList from '../../components/shortList';
import VideoModal from '../../components/modal';
import Loading from '../../components/loadingIcon';
import {MyConsumer} from '../../context/myProvider';

import { Grid, Header, Responsive } from 'semantic-ui-react';

class Home extends Component {

    render() {
        return (
            <div>
                <MyConsumer>
                    {(context) => {
                        if(context.state.videos.length <= 0){
                            return (
                                <Loading />
                            )
                        }
                        return (
                        <React.Fragment>
                            <VideoModal
                                modalState={context.state.modalOpen}
                                video={context.state.selectedVideo}
                                close={context.state.handleCloseModal} />
                            <Responsive as={Grid} stackable centered container={true} columns='equal'>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Banner/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={3}>
                                    <Grid.Column width={5}>
                                        <SocialMedia />
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Header as='h3' textAlign='center'>
                                            Most Recent
                                        </Header>
                                        <ShortList podcasts={context.state.videos}
                                            onVideoSelect={context.state.selectVideo}
                                            />
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Header as='h3' textAlign='center'>
                                            Most Popular
                                        </Header>
                                        <ShortList
                                            podcasts={context.state.mostPopVids}
                                            onVideoSelect={context.state.selectVideo}
                                            />
                                    </Grid.Column>
                                </Grid.Row>
                            </Responsive>
                        </React.Fragment>
                            )
                    }}
                </MyConsumer>
            </div>
        )
    }
}

export default Home;
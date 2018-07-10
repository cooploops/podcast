import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from '../../components/searchbar';
import VideoDetail from '../../components/videoDetail';
import VideoModal from '../../components/modal';
import PodcastList from '../../components/list';
import {Grid, Divider, Responsive} from 'semantic-ui-react';
import {MyConsumer} from '../../context/myProvider';

class Podcasts extends Component{

    render(){
    
        return(
            <MyConsumer>
                {(context) => (
                    <Grid stackable container as={Responsive}>
                        <VideoModal
                        modalState={context.state.podcastModalOpen}
                        video={context.state.selectedPodcast}
                        close={context.state.handleClosePodcastModal} />
                        {/* <Grid.Row columns={1} centered>
                            <Grid.Column width={12}>
                                <VideoDetail video={context.state.selectedPodcast}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider/> */}
                        <Grid.Row columns={1} centered>
                            <Grid.Column width={6}>
                                <SearchBar onSearchTermChange={_.debounce(term => {context.state.podcastSearch(term)}, 300)} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <PodcastList
                            onPodcastSelect = {context.state.selectPodcast} 
                            podcasts={context.state.filteredVideos}/>
                        </Grid.Row>
                    </Grid>
                )}

            </MyConsumer>
        )
    }
}

export default Podcasts;
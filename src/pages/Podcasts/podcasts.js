import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from '../../components/searchbar';
import VideoModal from '../../components/modal';
import PodcastList from '../../components/list';
import Loading from '../../components/loadingIcon';
import {Grid, Responsive} from 'semantic-ui-react';
import {MyConsumer} from '../../context/myProvider';

class Podcasts extends Component{

    render(){

        const style = {
            paddingBottom: '5vh'
        }
    
        return(
            <MyConsumer>
                {(context) => {
                    if(context.state.videos.length <= 0) {
                        return (
                            <Loading/>
                        )
                    }
                    return (
                    <Grid style={style} stackable container as={Responsive}>
                        <VideoModal
                        modalState={context.state.podcastModalOpen}
                        video={context.state.selectedPodcast}
                        close={context.state.handleClosePodcastModal} />
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
                    )
                }}

            </MyConsumer>
        )
    }
}

export default Podcasts;
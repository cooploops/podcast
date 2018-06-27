import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from '../../components/searchbar';
import VideoDetail from '../../components/videoDetail';
import axios from 'axios';
import Fuse from 'fuse.js';
import PodcastList from '../../components/list';
import {Grid, Divider, Responsive} from 'semantic-ui-react';

class Podcasts extends Component{

    state = {
        storedVideos:[],
        filteredVideos:[],
        selectedPodcast: null
    }
    options = {
        shouldSort:true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            {
                name: 'raw.snippet.title',
                weight: 0.7
            },
            {
                name: 'raw.snippet.description',
                weight: 0.3
            }
        ]
    }

    componentDidMount(){
        // axios request to cloud function that performs YT api search of most recent uploads playlist and store in state of storedVideos and filteredVideos
        axios.get("https://us-central1-cloudfunctionstest-95896.cloudfunctions.net/Ollie")
        .then(result => {
            console.log(result);
            this.setState({
                storedVideos:result.data,
                filteredVideos: result.data
            });
            console.log(this.state);
        })
        .catch(error => console.log(error));
    }

    podcastSearch(term){
        if(!term){
            this.setState({
                filteredVideos:this.state.storedVideos
            })
        } else {
            const fuse = new Fuse(this.state.storedVideos, this.options);
            const results = fuse.search(term);
            this.setState({
                filteredVideos: results
            })
        console.log(this.state.filteredVideos);
        }
    }

    render(){
        const search = _.debounce(term => {this.podcastSearch(term)}, 300);

        return(
            <Grid stackable container as={Responsive}>
                <Grid.Row columns={1} centered>
                    <Grid.Column width={12}>
                        <VideoDetail video={this.state.selectedPodcast}/>
                    </Grid.Column>
                </Grid.Row>
                <Divider/>
                <Grid.Row columns={1} centered>
                    <Grid.Column width={6}>
                        <SearchBar onSearchTermChange={search} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <PodcastList
                    onPodcastSelect = {selectedPodcast => this.setState({selectedPodcast})} 
                    podcasts={this.state.filteredVideos}/>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Podcasts;
import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from '../../components/searchbar';

class Podcasts extends Component{

    state = {
        storedVideos:[],
        filteredVideos:[]
    }

    podcastSearch(term){
        // podcastSearch function will perform search of array of videos and will use lodash _.filter(datasource, {title: whatever user types in})
        // Note _.filter returns a whole new array which will be stored in filteredVideos every time the user enters input
    }

    componentDidMount(){
        // axios request to cloud function that performs YT api search of most recent uploads playlist and store in state of storedVideos and filteredVideos
    }

    render(){
        const search = _.debounce(term => {this.podcastSearch(term)}, 300);

        return(
            <div>
            <SearchBar onSearchTermChange={search} />
            </div>
        )
    }
}

export default Podcasts;
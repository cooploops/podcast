import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from '../../components/searchbar';

class Podcasts extends Component{

    podcastSearch(term){
        // TODO have a api request to search through our podcasts
    }

    componentDidMount(){
        // axios request to cloud function that performs YT api search of most recent uploads playlist and stores in state
        // podcastSearch function will perform search of array of videos and will use lodash
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
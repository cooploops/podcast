import React, {Component} from 'react';
import SearchBar from '../../components/searchbar';

class Podcasts extends Component{

    podcastSearch(term){
        // TODO have a api request to search through our podcasts
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
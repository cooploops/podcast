import React, {Component} from 'react';
import Fuse from 'fuse.js';
import axios from 'axios';

const MyContext = React.createContext();
export const MyConsumer = MyContext.Consumer;

class MyProvider extends Component {
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
    
    state = {
        videos: [],
        filteredVideos: [],
        modalOpen: false,
        podcastModalOpen: false,
        selectedVideo: null,
        selectedPodcast: null,
        podcastSearch: (term) => {
            if(!term){
                this.setState({
                    filteredVideos:this.state.videos
                })
            } else {
                const fuse = new Fuse(this.state.videos, this.options);
                const results = fuse.search(term);
                this.setState({
                    filteredVideos: results
                })
            console.log(this.state.filteredVideos);
            }
        },
        handleCloseModal: () => this.setState({ modalOpen: false }),
        handleClosePodcastModal: () => this.setState({podcastModalOpen: false}),
        selectVideo: (selectedVideo) => {
            this.setState({ selectedVideo, modalOpen: true })},
        selectPodcast: selectedPodcast => this.setState({selectedPodcast, podcastModalOpen: true})
    }

    componentDidMount() {
        axios.get("https://us-central1-cloudfunctionstest-95896.cloudfunctions.net/Ollie")
        .then(result => {
            this.setState({
                videos:result.data,
                filteredVideos: result.data
            });
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;
import React, {Component} from 'react';
import Fuse from 'fuse.js';
import axios from 'axios';

const MyContext = React.createContext();
export const MyConsumer = MyContext.Consumer;

class MyProvider extends Component {
    state = {
        videos: [],
        filteredVideos: [],
        modalOpen: false,
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
        selectVideo: (selectedVideo) => {
            this.setState({ selectedVideo, modalOpen: true })},
        selectPodcast: selectedPodcast => this.setState({selectedPodcast})
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
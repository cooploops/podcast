import React, { Component } from 'react';
import _ from 'lodash';

class SearchBar extends Component {
    //TODO work on making this part of application state
    state = {
        term:'Search for Podcasts here'
    }
    
    render() {
        return (
        <div className="search-bar">
            <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
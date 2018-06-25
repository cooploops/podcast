import React, { Component } from 'react';
import {Input, Icon} from 'semantic-ui-react';

class SearchBar extends Component {
    //TODO work on making this part of application state
    state = {
        term:''
    }
    
    render() {
        return (
            <Input
            fluid
            placeholder='Search Podcasts'
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            icon>
            <input />
            <Icon name='search'/>
            </Input>
        );
    }

    onInputChange(term) {
        this.setState({term});
        console.log(term);
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
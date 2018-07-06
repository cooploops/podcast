import React, {Component} from 'react';
import axios from 'axios';

const MyContext = React.createContext();
export const MyConsumer = MyContext.Consumer;

class MyProvider extends Component {
    state = {
        videos: []
    }

    componentDidMount() {
        axios.get("https://us-central1-cloudfunctionstest-95896.cloudfunctions.net/Ollie")
        .then(result => {
            this.setState({videos:result.data});
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
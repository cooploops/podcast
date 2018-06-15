import React, {Component} from 'react';
import Banner from '../../components/banner';
import SocialMedia from '../../components/social_media';
import PodcastList from '../../components/list';
import axios from "axios";

import {Grid, Divider} from 'semantic-ui-react';

class Home extends Component {
    state = {
        videos:[]
    };

    componentDidMount(){
        axios.get("https://us-central1-cloudfunctionstest-95896.cloudfunctions.net/Ollie")
        .then(result => {
            console.log(result);
            this.setState({videos:result.data});
            console.log(this.state);
        })
        .catch(error => console.log(error));
    }

    render() {
        const imagePaths = ["http://placekitten.com/g/800/500","http://placekitten.com/g/800/500","http://placekitten.com/g/800/500"]
        return(
            <div>
                <Banner images={imagePaths} />
                <Grid className='mt-3' divided columns={3}>
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <SocialMedia />
                        </Grid.Column>
                        <Divider vertical />
                        <Grid.Column width={3}>
                            {/* <PodcastList listTitle={'Most Recent'}/> */}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {/* <PodcastList listTitle={'Most Popular'}/> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Home;
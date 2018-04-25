import React, {Component} from 'react';
import Banner from '../../components/banner';
import SocialMedia from '../../components/social_media';
import PodcastList from '../../components/list';

import {Grid, Divider} from 'semantic-ui-react';

class Home extends Component {
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
                            <PodcastList listTitle={'Most Recent'}/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <PodcastList listTitle={'Most Popular'}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Home;
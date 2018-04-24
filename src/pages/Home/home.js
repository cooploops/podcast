import React, {Component} from 'react';
import Banner from '../../components/banner';
import SocialMedia from '../../components/social_media';

import {Grid} from 'semantic-ui-react';

class Home extends Component {
    render() {
        const imagePaths = ["http://placekitten.com/g/400/200","http://placekitten.com/g/400/200","http://placekitten.com/g/400/200"]
        return(
            <div>
                <Banner images={imagePaths} />
                <Grid divided columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <SocialMedia />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Home;
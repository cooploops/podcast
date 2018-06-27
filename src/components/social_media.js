import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const SocialMedia = props => (
    <div>
        <Grid stackable container>
            <Grid.Row textAlign='center'>
                <Grid.Column>
                    <h4>
                        Want to reach out to us? <br />
                        Find us here!
                    </h4>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} centered>
                    <Button circular color='facebook' icon='facebook' as='a' href='https://www.google.com/' target='_blank'>
                        {/* <Icon name='facebook' /> */}
                    </Button>
                    <Button circular color='twitter' icon='twitter' as='a'>
                        {/* <Icon name='twitter' /> Twitter */}
                    </Button>
            
                    <Button circular color='instagram' icon='instagram' as='a'>
                        {/* <Icon name='instagram' /> Instagram */}
                    </Button>
            
                    <Button circular color='youtube' icon='youtube'as='a'>
                        {/* <Icon name='youtube' /> YouTube */}
                    </Button>
            </Grid.Row>
        </Grid>
    </div>
);

export default SocialMedia;
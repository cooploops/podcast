import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const SocialMedia = props => (
    <div>
        <Grid stackable>
            <Grid.Row textAlign='center'>
                <Grid.Column>
                    <h4 className='socialMediaText'>
                        Want to reach out to us? <br />
                        Find us here!
                    </h4>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                    <Button circular color='facebook' icon='facebook' as='a' href='https://www.facebook.com/IfNoCan/' target='_blank'>
                    </Button>
                    <Button circular color='twitter' icon='twitter' as='a' href='https://twitter.com/IfNoCan' target='_blank'>
                    </Button>
                    <Button circular color='instagram' icon='instagram' as='a' href='https://www.instagram.com/ifnocan/' target='_blank'>
                    </Button>
                    <Button circular color='youtube' icon='youtube'as='a' href='https://www.youtube.com/channel/UCQQ-SrkqkSJ01C9vV99oFJg/' target='_blank'>
                    </Button>
                    <Button circular color='google plus' icon='rss'as='a' href='https://us-central1-cloudfunctionstest-95896.cloudfunctions.net/rssFeed' target='_blank'>
                    </Button>
            </Grid.Row>
        </Grid>
    </div>
);

export default SocialMedia;
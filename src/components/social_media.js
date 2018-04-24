import React from 'react';
import {Grid, Icon, Container, Divider} from 'semantic-ui-react';

const styles = {
    pointer: {
        cursor: 'pointer'
    }
}

const SocialMedia = props => (
    <div>
    <Container className="mb-5" textAlign="center">
        <h4>
            Want to reach out to us? <br />
            Find us here!
        </h4>
    </Container>
    <Grid columns={4}>
        <Grid.Row textAlign='center'>
            <Grid.Column>
                <Icon link name='facebook f' />
            </Grid.Column>
            <Grid.Column>
                <Icon link name='youtube' />
            </Grid.Column>
            <Grid.Column>
                <Icon link name='twitter' />
            </Grid.Column>
            <Grid.Column>
                <Icon link name='tumblr' />
            </Grid.Column>
        </Grid.Row>
        <Divider horizontal />
        <Grid.Row textAlign='center'>
            <Grid.Column>
                <Icon link name='instagram' />
            </Grid.Column>
            <Grid.Column>
                <i style={styles.pointer} className="fab fa-itunes-note" />
            </Grid.Column>
            <Grid.Column>
                <i style={styles.pointer} className="fab fa-medium-m" />
            </Grid.Column>
            <Grid.Column>
                <i style={styles.pointer} className="fab fa-discord" /> 
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
);

export default SocialMedia;
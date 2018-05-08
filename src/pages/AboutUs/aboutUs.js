import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import Card from '../../components/card';
import portrait2 from '../../assets/images/olliePortrait2.jpg';
import portrait1 from '../../assets/images/ollie1.jpg';
import portrait3 from '../../assets/images/ollie3.png';

class aboutUs extends Component{
    state={}

    render(){
        return(
        <Grid container columns={3}>
            <Grid.Row>
                <Grid.Column>
                    <Card 
                    headshot={portrait2}
                    name='Ollie'
                    job='Best Friend'
                    description="Hi I'm a dog and I love belly rubs and food"
                    insta='https://www.instagram.com/ohh_ollie/'/>
                </Grid.Column>
                <Grid.Column>
                    <Card 
                    headshot={portrait1}
                    name='Ollie'
                    job='Best Friend'
                    description="Hi I'm a dog and I love belly rubs and food"
                    insta='https://www.instagram.com/ohh_ollie/'/>
                </Grid.Column>
                <Grid.Column>
                    <Card 
                    headshot={portrait3}
                    name='Ollie'
                    job='Best Friend'
                    description="Hi I'm a dog and I love belly rubs and food"
                    insta='https://www.instagram.com/ohh_ollie/'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        )
    }
}

export default aboutUs;
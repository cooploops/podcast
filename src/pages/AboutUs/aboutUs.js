import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import Card from '../../components/card';
import portrait2 from '../../assets/images/hawaiiTempleCropped.jpg';
import portrait1 from '../../assets/images/jonoProfessionalCropped.jpg';
import portrait3 from '../../assets/images/corinneHawaii.jpg';

class aboutUs extends Component {
    
    state={}

    render(){
        const style = {
            paddingBottom:'25vh'
        }

        return(
        <Grid style={style} container stackable relaxed columns={3}>
            <Grid.Row>
                <Grid.Column>
                    <Card 
                    headshot={portrait2}
                    name='TJ'
                    job='Web Developer/Project Manager'
                    description="Hum-bitious workaholic, nerd connoisseur, and struggling ageing millenial. I find the silver lining in life's attempts
                    at keeping me grounded through humor, cliche motivational phrases, and chipotle"
                    insta='https://www.instagram.com/coopl00ps/'
                    twitter='https://twitter.com/tjcoop321'
                    github='https://github.com/cooploops/'
                    fb='https://www.facebook.com/tj.cooper.332'/>
                </Grid.Column>
                <Grid.Column>
                    <Card 
                    headshot={portrait1}
                    name='Jono'
                    job='UH MBA Candidate'
                    description="Hi I'm a dog and I love belly rubs and food"
                    insta='https://www.instagram.com/ohh_ollie/'/>
                </Grid.Column>
                <Grid.Column>
                    <Card 
                    headshot={portrait3}
                    name='Corinne'
                    job='Artist'
                    description="Hi I'm a dog and I love belly rubs and food"
                    insta='https://www.instagram.com/corinneiskorean/'
                    twitter='https://twitter.com/corinneiskorean'
                    fb='https://www.facebook.com/corinneiskorean/'
                    tumblr='http://timlncomic.tumblr.com/'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        )
    }
}

export default aboutUs;
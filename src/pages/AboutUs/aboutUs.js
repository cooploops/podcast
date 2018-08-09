import React, {Component} from 'react';
import {Grid, Segment, Header, Image, Divider, Responsive} from 'semantic-ui-react';
import Card from '../../components/card';
import portrait2 from '../../assets/images/hawaiiTempleCropped.jpg';
import portrait1 from '../../assets/images/jonoProfessionalCropped.jpg';
import portrait3 from '../../assets/images/corinneHawaii.jpg';

class aboutUs extends Component {

    render(){
        const headerStyle = {
            color: '#ff6b6b'
        }
        const style = {
            paddingBottom:'25vh'
        }

        return(
        <Responsive as={Grid} style={style} container stackable relaxed>
            <Grid.Row centered>
                <Grid.Column width={13}>
                    <Header as='h1' textAlign='center' attached='top' style={headerStyle}>About Us</Header>
                    <Segment attached padded>
                        <p><b>If No Can</b> is a weekly podcast show featuring topics that primarily pertain to us, and people like us, the struggling millennial. If No Can borrows it's name
                        from a Hawaiian Pidgin philosophy of "If can, can, If no can, no can," which means, if I get to it great, if not, no big deal. It's a don't sweat the small stuff mentality, and
                        focus on the things within your control.
                        </p>
                        <Header as='h3'>Goals</Header>
                        <ol>
                            <li><b>Fun</b> - First and foremost we started this podcast to have fun. This is an outlet for us to goof off (a little), talk about stuff we're interested in, and make each other laugh</li>
                            <li><b>Self Improvement</b> - We're all pretty new to recording a podcast so please be patient with us as we grind and level up our ability to make quality content. We all bring a different skill set to this podcast that we're using and we hope to sharpen them through this show as well as develop some new skills</li>
                            <li><b>Engagement</b> - We literally could accomplish our first two goals in private like normal people but why not invite other's on our journey? That's where <b>You</b>, the audience, come in. We want to engage with our listeners and hear what you have to say as well.</li>  
                        </ol>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Divider >
                <Header as='h3' textAlign='center'>Meet The Cast</Header>
            </Divider>
            <Grid.Row centered columns='equal'>
                <Grid.Column width={4}>
                    <Card 
                    headshot={portrait2}
                    name='TJ'
                    job='Web Developer/Project Manager'
                    description="Hum-bitious workaholic, nerd connoisseur, and struggling ageing millenial. I find the silver lining in life's attempts
                    at keeping me grounded through humor, cliche motivational phrases, and chipotle"
                    insta='https://www.instagram.com/coopl00ps/'
                    twitter='https://twitter.com/tjcoop321'
                    github='https://github.com/cooploops/'
                    fb='https://www.facebook.com/tj.cooper.332'
                    linkedin='https://www.linkedin.com/in/tjcoop321/'/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Card 
                    headshot={portrait1}
                    name='Jono'
                    job='UH MBA Candidate'
                    description="From academic to entrepreneur, Jono applies social work practices and policies into the business community. He is committed to shaping the world for the better, using laughter, empathy, and an MBA"
                    insta='https://www.instagram.com/jonohatestofu/'
                    linkedin='https://www.linkedin.com/in/jonathantyi/'/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Card 
                    headshot={portrait3}
                    name='Corinne'
                    job='Artist'
                    description="Corinne is a nearly starving artist who thought to herself one day in the middle of paying her electric bill: 'You know what would be a great idea? Starting a podcast.' She is the artist behind the webcomic 'This is My Life Now' and enjoys nature documentaries, Rupaul's Drag Race, and Animal Crossing"
                    insta='https://www.instagram.com/corinneiskorean/'
                    twitter='https://twitter.com/corinneiskorean'
                    fb='https://www.facebook.com/corinneiskorean/'
                    tumblr='http://timlncomic.tumblr.com/'
                    linkedin='https://www.linkedin.com/in/corinnenewbegin/'/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns='equal'>
                <Grid.Column stretched width={4}>
                    <Header as='h3' textAlign='center'>Send us an email by clicking the image below!</Header>
                    <Image
                    centered
                    label={{corner:'right', icon:'mail', color:'grey'}}
                    as='a' 
                    src='https://media3.giphy.com/media/XIqCQx02E1U9W/giphy.gif' 
                    size='medium' 
                    rounded
                    href='mailto:info@ifnocan.com'
                    target='_blank'/>
                </Grid.Column>
            </Grid.Row>
        </Responsive>
        )
    }
}

export default aboutUs;
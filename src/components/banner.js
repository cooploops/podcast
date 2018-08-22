import React, {Component} from 'react';
import { Container, Responsive, Image } from 'semantic-ui-react';
import Slider from 'react-slick';
import bigLogoDarkBackground from '../assets/images/pineapplesfinished4-dark.jpg';
import bigLogoClearBackground from '../assets/images/pineapplesfinished4.png';

class Banner extends Component {

    render(){  
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 4500,
            speed: 2000 
        };

        const containerStyle = {
            'marginBottom':'3em'
        }


        //could just make an array of images and map over it
        // export carousel to it's own component and import into Banner
        return (
            <Responsive 
            style={containerStyle} 
            as={Container}>
                <Slider {...settings}>
                        <div>
                            <Image 
                            centered={true} 
                            rounded={true} 
                            src={bigLogoDarkBackground} 
                            alt={'If No Can Logo'}
                           />
                        </div>
                        <div>
                            <Image 
                            centered={true} 
                            rounded={true} 
                            src={bigLogoClearBackground} 
                            alt={'If No Can Logo'}  
                            size='huge'
                           />
                        </div>
                </Slider>
            </Responsive>
        )
    }
}

export default Banner;
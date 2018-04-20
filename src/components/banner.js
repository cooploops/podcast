import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import Slider from 'react-slick';

class Banner extends Component {
    render(){  
        const settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed:1000,
            pauseOnDotsHover: true,
            pauseOnHover: true
        };
        //could just make an array of images and map over it
        // export carousel to it's own component and import into Banner
        return (
            <Container>
                <Slider {...settings}>
                    <div>
                        <img className="mx-auto" src="http://placekitten.com/g/400/200" alt="first"/>
                    </div>
                    <div>
                        <img className="mx-auto" src="http://placekitten.com/g/400/200" alt="second"/>
                    </div>
                    <div>
                        <img className="mx-auto" src="http://placekitten.com/g/400/200" alt="third"/>
                    </div>
                </Slider>
            </Container>
        )
    }
}

export default Banner;

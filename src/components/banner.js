import React, {Component} from 'react';
import { Container, Responsive, Image } from 'semantic-ui-react';
import Slider from 'react-slick';

class Banner extends Component {
    render(){  
        const settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 10000,
            speed:1500,
            pauseOnDotsHover: true,
            pauseOnHover: true,
            easing: 'ease-out'
        };

        //could just make an array of images and map over it
        // export carousel to it's own component and import into Banner
        return (
            <Responsive as={Container}>
                <Slider {...settings}>
                    {this.props.images.map((path, i) => (
                        <div key={i}>
                            <Image centered={true} rounded={true} src={path} alt={'cat'} key={i} fluid />
                        </div>
                    ))}
                </Slider>
            </Responsive>
        )
    }
}

export default Banner;

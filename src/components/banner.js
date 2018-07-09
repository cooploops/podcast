import React, {Component} from 'react';
import { Container, Responsive, Image } from 'semantic-ui-react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Slider from 'react-slick';

class Banner extends Component {

    render(){  
        const settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed:1500,
            pauseOnDotsHover: true,
            easing: 'ease-out'
        };

        const containerStyle = {
            'marginBottom':'3em'
        }


        //could just make an array of images and map over it
        // export carousel to it's own component and import into Banner
        return (
            <Responsive style={containerStyle} as={Container}>
                <Slider {...settings}>
                    {this.props.images.map((path, i) => (
                        <div key={i}>
                            <Image 
                            centered={true} 
                            rounded={true} 
                            src={path} 
                            alt={'cat'} 
                            key={i} 
                            fluid
                           />
                        </div>
                    ))}
                </Slider>
            </Responsive>
        )
    }
}

export default Banner;
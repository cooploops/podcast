import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Image} from 'semantic-ui-react';

export default class Navbar extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state
  
      return (
        <Menu borderless fluid>
            <Menu.Item
            position='left'
            as={Link} to='/'>
                <Image src="http://placekitten.com/g/75/75"
                alt='logo'
                size='mini'
                circular/>
            </Menu.Item>
            
              <Menu.Item
                name='Home'
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}
                as={Link} to='/'>
                Home
              </Menu.Item>
            
              <Menu.Item
                name='Podcasts'
                active={activeItem === 'Podcasts'}
                onClick={this.handleItemClick}
                as={Link} to='podcasts'>
                Podcasts
              </Menu.Item>
            
              <Menu.Item
                name='About Us'
                active={activeItem === 'About Us'}
                onClick={this.handleItemClick}
                as={Link} to='/about'>
                About Us
              </Menu.Item>

        </Menu>
      )
    }
}

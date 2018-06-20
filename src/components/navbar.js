import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Image} from 'semantic-ui-react';

export default class Navbar extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state
  
      return (
        <Menu borderless>
            <Menu.Item
            position='left'>
            <Link to='/'>
                <Image src="http://placekitten.com/g/75/75"
                alt='logo'
                size='mini'
                circular/>
            </Link>
            </Menu.Item>

            <Link to='/'>
              <Menu.Item
                name='Home'
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}>
                Home
              </Menu.Item>
            </Link>

            <Link to='/podcasts'>
              <Menu.Item
                name='Podcasts'
                active={activeItem === 'Podcasts'}
                onClick={this.handleItemClick}>
                Podcasts
              </Menu.Item>
            </Link>

            <Link to='/about'>
              <Menu.Item
                name='About Us'
                active={activeItem === 'About Us'}
                onClick={this.handleItemClick}>
                About Us
              </Menu.Item>
            </Link>

        </Menu>
      )
    }
}

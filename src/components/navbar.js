import React, {Component} from 'react';
import {Menu, Image} from 'semantic-ui-react';

export default class Navbar extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state
  
      return (
        <Menu borderless>
            <Menu.Item
            position='left'
            href="/">
                <Image src="http://placekitten.com/g/75/75"
                alt='logo'
                size='mini'
                circular/>
            </Menu.Item>


            <Menu.Item
              href="/"
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}>
              Home
            </Menu.Item>

            <Menu.Item
              href='/podcasts'
              name='Podcasts'
              active={activeItem === 'Podcasts'}
              onClick={this.handleItemClick}>
              Podcasts
            </Menu.Item>


            <Menu.Item
              href='/about'
              name='About Us'
              active={activeItem === 'About Us'}
              onClick={this.handleItemClick}>
              About Us
            </Menu.Item>

        </Menu>
      )
    }
}

import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const bioCard = (props) => (
  <Card>
    <Image src={props.headshot} alt='headshot' size="medium"/>
    <Card.Content>
      <Card.Header>
        {props.name}
      </Card.Header>
      <Card.Meta>
        <span>
          {props.job}
        </span>
      </Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={props.twitter} target="_blank">
      <Icon link name='twitter' />
      </a>
      <a href={props.fb} target="_blank">
      <Icon link name='facebook f' />
      </a>
      <a href={props.insta} target="_blank">
      <Icon link name='instagram' />
      </a>
      {props.github && 
      <a href={props.github} target="_blank">
        <Icon link name='github' />
      </a>
      }
      {props.tumblr &&
        <a href={props.tumblr} target="_blank">
        <Icon link name='tumblr' />
      </a>
      }
    </Card.Content>
  </Card>
)

export default bioCard;
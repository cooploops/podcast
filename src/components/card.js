import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const bioCard = (props) => (
  <Card>
    <Image src={props.headshot} circular alt='headshot'/>
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
    </Card.Content>
  </Card>
)

export default bioCard;
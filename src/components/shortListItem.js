import React from 'react';
import {List, Image} from 'semantic-ui-react';

const shortListItem = props => {

    const defaultImg = props.podcast.raw.snippet.thumbnails.default.url;
    return (
    <List.Item onClick={props.click} key={props.podcast.raw.id}>
        <Image src={defaultImg} size='tiny' verticalAlign='middle'/>
        <List.Content verticalAlign='middle'>
            <List.Header>
                {props.podcast.raw.snippet.title}
            </List.Header>
        </List.Content>
    </List.Item>
    )
}
export default shortListItem;
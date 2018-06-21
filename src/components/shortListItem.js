import React from 'react';
import {List, Image} from 'semantic-ui-react';

const shortListItem = ({podcast}) => {

    const defaultImg = podcast.raw.snippet.thumbnails.default.url;
    return (
    <List.Item key={podcast.raw.id}>
        <Image src={defaultImg} size='tiny' verticalAlign='middle'/>
        <List.Content verticalAlign='middle'>
            <List.Header>
                {podcast.raw.snippet.title}
            </List.Header>
        </List.Content>
    </List.Item>
    )
}
export default shortListItem;
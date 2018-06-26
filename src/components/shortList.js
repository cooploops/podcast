import React from 'react';

import {List, Image} from 'semantic-ui-react';

const ShortList = props => {
    const listStyle = {
        'maxHeight':'15em',
        'minWidth': '90%',
        'overflowY':'auto'
    }

    const listItemStyle = {
        'minWidth':'5em'
    }

        if(!props.podcasts){
            return <div> no videos detected </div>
        } else {
        const miniList = props.podcasts.map((podcast) => {

            const defaultImg = podcast.raw.snippet.thumbnails.default.url;
            return (
            <List.Item style={listItemStyle} key={podcast.raw.id} onClick={() => props.onVideoSelect(podcast)}>
                <Image src={defaultImg} size='tiny' verticalAlign='middle'/>
                <List.Content verticalAlign='middle'>
                    <List.Header>
                        {podcast.raw.snippet.title}
                    </List.Header>
                </List.Content>
            </List.Item>
            );
        });

    return (
    <div>
        <List style={listStyle} relaxed link>
            {miniList}
        </List>
    </div>
    )
    }
}

export default ShortList;
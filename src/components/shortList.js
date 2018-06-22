import React from 'react';

import {List, Image} from 'semantic-ui-react';

const ShortList = props => {
        if(!props.podcasts){
            return <div> no videos detected </div>
        } else {
        const miniList = props.podcasts.map((podcast) => {

            // set it up so that when a list item is click that it opens up in a modal on the home page with the embedded youtube video ready to play
            const defaultImg = podcast.raw.snippet.thumbnails.default.url;
            return (
            <List.Item key={podcast.raw.id} onClick={() => props.onVideoSelect(podcast)}>
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
        <List relaxed link>
            {miniList}
        </List>
    </div>
    )
    }
}

export default ShortList;
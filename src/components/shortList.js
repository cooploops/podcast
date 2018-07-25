import React from 'react';

import {List, Image, Container} from 'semantic-ui-react';

const ShortList = props => {
    const listStyle = {
        'maxHeight':'15em',
        'minWidth': '95%',
        'overflowY':'auto'
    }

    const listItemStyle = {
        'minWidth':'5em',
        'cursor':'pointer'
    }

    const imgStyle = {
        'padding': '2px',
        'border':'1px solid rbga(0,0,0,0.05)',
        'borderRadius':'5px'
    }

        if(!props.podcasts){
            return <div> no videos detected </div>
        } else {
        const miniList = props.podcasts.map((podcast) => {

            const defaultImg = podcast.raw.snippet.thumbnails.default.url;
            return (
            <List.Item style={listItemStyle} key={podcast.raw.id} onClick={() => props.onVideoSelect(podcast)}>
                <List.Content verticalAlign='middle' as={Container}>
                    <Image style={imgStyle} src={defaultImg} size='tiny' verticalAlign='middle'floated='left'/>
                    <List.Header>
                        {podcast.raw.snippet.title}
                    </List.Header>
                </List.Content>
            </List.Item>
            );
        });

    return (
    <div>
        <List style={listStyle} className='shortlist' relaxed link>
            {miniList}
        </List>
    </div>
    )
    }
}

export default ShortList;
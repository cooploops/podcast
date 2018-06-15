import React from 'react';
import {List, Image} from 'semantic-ui-react';

// TODO turn this into a map as it'll be likely props will be an array of results
 const PodcastList = props => {

     const podcastList = props.podcasts.map((podcast) => {

         const defaultImg = podcast.raw.snippet.thumbnails.default.url;
         const url = `https://www.youtube.com/watch?v=${podcast.raw.snippet.resourceId.videoId}`;

         return (
            <List.Item>
                <Image src={defaultImg} size='tiny'/>
                <List.Content>
                    <List.Header href={url}>
                        {podcast.raw.snippet.title}
                    </List.Header>
                    <List.Description>
                        {podcast.raw.snippet.description}
                    </List.Description>
                </List.Content>
            </List.Item>
         );
     });

    return (
    <div>
        <List bulleted relaxed>
            {podcastList}
        </List>
    </div>
    )
};

 export default PodcastList;
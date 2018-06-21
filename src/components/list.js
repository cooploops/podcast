import React from 'react';
import {List, Image} from 'semantic-ui-react';

// TODO turn this into a map as it'll be likely props will be an array of results
 const PodcastList = props => {

     const podcastList = props.podcasts.map((podcast) => {

         const defaultImg = podcast.raw.snippet.thumbnails.default.url;

         return (
            <List.Item key={podcast.raw.id} onClick={() => props.onPodcastSelect(podcast)}>
                <Image src={defaultImg} size='tiny'/>
                <List.Content>
                    <List.Header>
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
        <List bulleted relaxed link>
            {podcastList}
        </List>
    </div>
    )
};

 export default PodcastList;
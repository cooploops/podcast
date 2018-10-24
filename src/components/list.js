import React from 'react';
import {List, Image, Segment, Container} from 'semantic-ui-react';

// TODO turn this into a map as it'll be likely props will be an array of results
 const PodcastList = props => {
     const listStyle = {
         'maxHeight':'50em',
         'minWidth': '90%',
         'overflowY':'auto',
         'border': 'solid black 1px',
         'borderRadius': '5px',
         'padding': '1em',
         'background': 'rgba(0,0,0,0.05)'
     }

     const listItemStyle = {
         'maxWidth':'99%',
         'cursor': 'pointer',
         'padding':'5px'
     }

     const imgStyle = {
        'padding': '2px',
        'border':'1px solid rbga(0,0,0,0.05)',
        'borderRadius':'5px'
    }
    if (props.podcasts) {
        const publicVideos = props.podcasts.filter(podcast => podcast.thumbnails);
        const podcastList = publicVideos.map((podcast) => {

            const defaultImg = podcast.raw.snippet.thumbnails.maxres ? podcast.raw.snippet.thumbnails.maxres.url : podcast.raw.snippet.thumbnails.standard.url;
   
            return (
               <List.Item 
               style={listItemStyle} 
               key={podcast.raw.id} 
               onClick={() => {
                   props.onPodcastSelect(podcast);
                   }} 
               as={Segment}>
                   <List.Content 
                   as={Container}>
                   <Image 
                   verticalAlign='middle' 
                   src={defaultImg} 
                   size='small' 
                   floated='left'
                   style={imgStyle}/>
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
           <List 
           style={listStyle} 
           relaxed>
               {podcastList}
           </List>
       </div>
       )
    }
};

 export default PodcastList;
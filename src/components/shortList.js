import React from 'react';
import ShortListItem from './shortListItem';
import {List, Embed, Modal} from 'semantic-ui-react';

const ShortList = props => {
        if(!props.podcasts){
            return <div> no videos detected </div>
        } else {
        const miniList = props.podcasts.map((podcast) => {

            // set it up so that when a list item is click that it opens up in a modal on the home page with the embedded youtube video ready to play

            return (
            <Modal key={podcast.raw.etag} trigger={<ShortListItem podcast={podcast}/>}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content>
                    <Embed
                    aspectRation='16:9' 
                    id={podcast.raw.snippet.resourceId.videoId} 
                    source='youtube'/>
                </Modal.Content>
            </Modal>
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
import React from 'react';
import { Embed, Modal } from 'semantic-ui-react';

const VideoModal = props => {
    if (!props.video) {
        return (
            <div></div>
        );
    } 
        return (
    <Modal
            className="scrolling"
        size='tiny'
        key={props.video.raw.etag}
        closeIcon
        open={props.modalState}
        onClose={props.close}
        >
        <Modal.Content>
            <Embed
                brandedUI
                aspectRatio='16:9'
                id={props.video.raw.snippet.resourceId.videoId}
                source='youtube'
                placeholder={props.video.raw.snippet.thumbnails.maxres.url} />
        </Modal.Content>
    </Modal>
        );

}

export default VideoModal;
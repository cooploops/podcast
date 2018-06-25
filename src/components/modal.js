import React from 'react';
import { Embed, Modal, Responsive } from 'semantic-ui-react';

const VideoModal = props => {
    const modalStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:"3rem"
    }

    if (!props.video) {
        return (
            <div></div>
        );
    }
    return (
        <Responsive as={Modal}
            style={modalStyle}
            size='large'
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
                    placeholder={props.video.raw.snippet.thumbnails.maxres ? props.video.raw.snippet.thumbnails.maxres.url : props.video.raw.snippet.thumbnails.standard.url} />
            </Modal.Content>
        </Responsive>
    );

}

export default VideoModal;
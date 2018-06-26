import React from 'react';
import { Segment, Embed, Header } from 'semantic-ui-react';

const videoDetail = ({ video }) => {
    const segStyle = {
        'marginRight': 'auto',
        'marginLeft': 'auto'
    }
    if (!video) {
        return <Segment style={segStyle} raised compact>Select a podcast below</Segment>;
    }

    const videoId = video.raw.snippet.resourceId.videoId;
    return (
        <div>
            <Embed
                autoplay={false}
                hd={false}
                id={videoId}
                iframe={{
                    allowFullScreen: true,
                    style: {
                        padding: 10
                    },
                }}
                placeholder={video.raw.snippet.thumbnails.maxres ? video.raw.snippet.thumbnails.maxres.url : video.raw.snippet.thumbnails.standard.url}
                source='youtube'
            />
            <Segment>
                <Header size='medium'>{video.raw.snippet.title}</Header>
                {video.raw.snippet.description}
            </Segment>
        </div>
    );
};

export default videoDetail;
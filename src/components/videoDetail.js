import React from 'react';

const videoDetail = ({video}) => {
if(!video){
    return <div>Loading...</div>;
}

const videoId = video.raw.snippet.resourceId.videoId;
const url = `https://www.youtube.com/embed/${videoId}`
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.raw.snippet.title}</div>
                <div>{video.raw.snippet.description}</div>    
            </div>
        </div>
    );
};

export default videoDetail;
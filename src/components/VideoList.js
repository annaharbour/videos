import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
     const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
     })

    //props.videos is going to be the array we want to render
    return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList;
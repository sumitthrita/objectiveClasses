import React from 'react'
import ReactPlayer from 'react-player/youtube';
import './HomeVideo.css';


const HomeVideo = () => {
    return (
        <div className="homeVideoMain" >
            <ReactPlayer url='https://youtu.be/hdxQlHuwtRY' controls="true" width="75vw" height="70vh"  />
        </div>
    );
};

export default HomeVideo;
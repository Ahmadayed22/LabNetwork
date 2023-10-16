import React from 'react'
import '../componentssass/video.css'
import { useContext } from 'react'
import { UserContext } from '../context/Context'
import Animation from './Animation'
const Video = () => {
    const url = useContext(UserContext)
    return (
        <Animation>
            <div className='Video'>
                <iframe width="853" height="480"
                    src={url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
        </Animation>
    )
}

export default Video
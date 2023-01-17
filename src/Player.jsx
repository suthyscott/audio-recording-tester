import {useState} from 'react'
import BlobPlayer from './BlobPlayer'

const Player = ({audioBlobs}) => {
    
    console.log(audioBlobs[0])
    let recordingsDisplay = audioBlobs.map(audio=>{
        console.log(audio)
        return <BlobPlayer audio={audio}/>
    })

    return (
        <div>
            <h1>ChatterBox</h1>
            <div className="chatter-box">{recordingsDisplay}</div>
        </div>
    )

}

export default Player
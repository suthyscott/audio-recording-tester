import {useState, useEffect} from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';

const Recorder = ({addBlob}) => {
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({audio: true})
    // console.log(mediaBlobUrl)
  
    const [audio, setAudio]=useState()
  
   
  
    useEffect(()=>{
      console.log(audio)
      if(audio){
        const audioBlob = new Audio(audio)
        addBlob(audioBlob)
      }
    //   socket.emit("send_audio", {audio, room})
    },[audio])
  
    // let audioFile = new File([mediaBlobUrl], "New Audio", {lastModified: new Date().getTime(), type:"audio/mp3"})
    // console.log("this is the file", audioFile)
  
      function boolean (){
        if (status ==='recording'){
          return true
        }else return false
      }
      
  
    return (
      <div className='response-boxes'>
        <button onClick={status !== 'recording' ? startRecording : stopRecording} className={status !== 'recording' ? "record" : "stop"}>{status !== 'recording' ? "Record" : "Stop"}</button>
        <Timer active={boolean()}>
        <Timecode className="enter-pin timer"/>
        </Timer>
        {mediaBlobUrl ? <audio controls  src={mediaBlobUrl}/>: <p>No audio has been recorded</p>}
        <button onClick={(event)=>{setAudio(mediaBlobUrl)}} className="enter-pin">Submit</button>
      </div>
    )
}

export default Recorder
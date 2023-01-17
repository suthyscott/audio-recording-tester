import './App.css';
import Recorder from './Recorder'
import Player from './Player'
import { useState } from 'react';

function App() {
  const [audioBlobs, setAudioBlobs] = useState([])

  const addBlob = newBlobUrl => {
    if(newBlobUrl){
      console.log("addblob", newBlobUrl)
      setAudioBlobs([...audioBlobs, newBlobUrl])

    }
  }
  return (
    <div className="App">
      <Recorder addBlob={addBlob}/>
      <Player audioBlobs={audioBlobs}/>
    </div>
  );
}

export default App;

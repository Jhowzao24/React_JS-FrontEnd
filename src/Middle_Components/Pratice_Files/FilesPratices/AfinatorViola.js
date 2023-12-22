import React, { useState } from "react";
import Viola_Tuner from '../Mp3Audios/Viola_Tuner.mp3';
import { Button } from "antd";

const ViolaAfin = () => {
  const [isPlaying, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div style={{ width: '500px', margin: '-30px', backgroundColor: 'dodgerblue', color: 'midnightblue'}}>
      <h2>Viola Tuner</h2>
      <h4>This instrument will start from the string LÁ</h4>
      <center>
      {!isPlaying ? (
        <Button onClick={handlePlay}>Start</Button>
      ) : (
        <Button onClick={handlePause}>Pause</Button>
      )}
      {isPlaying && (
        <audio style={{width: '300px', height: '50px'}} controls autoPlay>
          <source src={Viola_Tuner} type="audio/mpeg" />
        </audio>
      )}
      </center>
    </div>
  );
};

export default ViolaAfin;
import React, { useState } from 'react';
import Celloeye from '../Mp3Audios/CelloEye.mp3';

const MeuComponente = () => {
  const [audio] = useState(new Audio(Celloeye));
  
  const tocarSom = () => {
    audio.play();
  };
  
  return (
    <div>
      <button onClick={tocarSom}>Tocar Som</button>
    </div>
  );
};

export default MeuComponente;



/*
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      {isPlaying && (
        <audio src={AfinationCello} autoPlay>
          Seu navegador não suporta a tag de áudio.
        </audio>
      )}
    </div>
  );
};

export default AudioPlayer;
*/
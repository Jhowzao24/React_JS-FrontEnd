import { Button } from 'antd';
import React, { useState } from 'react';

const NoteTrainer = () => {
  const notes = ["DÓ", "RÉ", "MI","FÁ", "SOL","LÁ", "SI"];
  const [randomNote, setRandomNote] = useState("");

  const getRandomNote = () => {
    const randomIndex = Math.floor(Math.random() * notes.length);
    setRandomNote(notes[randomIndex]);
  };

  return (
    <div>
      <h1>Pratice Natural Notes</h1>
      <ul style={{color: 'darkcyan'}}>
        <li><h3>Memorize</h3></li>
        <li><h3>Repeat</h3></li>
        <li><h3>Play on anywhere in your Instrument</h3></li>
      </ul>
      <Button style={{backgroundColor: 'lightblue', boxShadow: '0 0 10px 7px'}} onClick={getRandomNote}>Generate Random Note</Button>
      {randomNote && <h2 style={{color: 'blanchedalmond'}}>{randomNote}</h2>}
    </div>
  );
};

export default NoteTrainer;
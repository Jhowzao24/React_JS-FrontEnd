import { ButtonBase } from '@material-ui/core';
import { Button, Input } from '@mui/material';
import React, { useState } from 'react';

const ViolinFingeringTrainer = () => {
  const [fingering, setFingering] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleAddNote = () => {
    if (currentNote !== '') {
      setFingering([...fingering, currentNote]);
      setCurrentNote('');
    }
  };

  const handleRemoveNote = (index) => {
    const newFingering = [...fingering];
    newFingering.splice(index, 1);
    setFingering(newFingering);
  };

  return (
    <div style={{color: 'lightblue'}}>
      <h1>Violin Fingering Trainer</h1>
      <Input style={{color: 'lightblue'}} type="text" value={currentNote} onChange={handleNoteChange} />
      <ButtonBase onClick={handleAddNote}>Add Note</ButtonBase>
      <ul>
        {fingering.map((note, index) => (
          <li key={index}>
            {note}
            <Button style={{backgroundColor: 'red', color: 'white', float: 'right'}} onClick={() => handleRemoveNote(index)}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViolinFingeringTrainer;
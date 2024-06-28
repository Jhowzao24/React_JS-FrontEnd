import { Button } from '@mui/material';
import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

function SpaceNotes(){
  const [notes] = useState(['Timbre', 'Intensity', 'Duration', 'Height']);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [score, setScore] = useState(0);
  const handleNoteClick = (clickedNote) => {
    if (clickedNote === 'Intensity') {
      toast.success('Congratulation, you righted it!');
      toast.info(notes);
      setScore(score + 1);
      setCurrentNoteIndex(currentNoteIndex + 1);
    } else {
      toast.error('Opps!! Try it again!! One more time!!');
    }
  };
  return(
    <div style={{backgroundColor: 'cyan', color: 'blue'}}>
      <h2>Exercíse of the Property of the sounds!!</h2>
      <p>Pontuação: {score}</p>
        <div>
          <h3>What is the property that transform the sound on F f f? {currentNoteIndex + 1}?</h3>
          <Button style={{backgroundColor: 'Highlight', color: 'white', fontFamily: 'cursive'}} onClick={() => handleNoteClick('Timbre')}>Timbre</Button>
          <Button style={{backgroundColor: 'Highlight', color: 'white', fontFamily: 'cursive'}} onClick={() => handleNoteClick('Intensity')}>Intensity</Button>
          <Button style={{backgroundColor: 'Highlight', color: 'white', fontFamily: 'cursive'}} onClick={() => handleNoteClick('Duration')}>Duration</Button>
          <Button style={{backgroundColor: 'Highlight', color: 'white', fontFamily: 'cursive'}} onClick={() => handleNoteClick('Height')}>Height</Button>
        </div>
        <br/>
      <ToastContainer/>
    </div>
  )
}

const NotesExercise = () => {
  // eslint-disable-next-line no-unused-vars
  const [notes, setNotes] = useState(['Rhythm', 'Melody', 'Harmony']);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNoteClick = (clickedNote) => {
    if (clickedNote === 'Rhythm') {
      toast.success('Congratulation, you accerted it!!');
      setNotes('Rhythm');
      toast.info(notes);
      setScore(score + 1);
      setCurrentNoteIndex(currentNoteIndex + 1);
    } else {
      toast.error('Opps!! Try it again!! One more time!!');
    }
  };

  return (
    <div style={{backgroundColor: 'transparent', color: 'blue'}}>
      <h2>Exercíses of the music element!</h2>
        <div>
          <h3>What is the Element of the music that mark the time one by one? {currentNoteIndex + 1}?</h3>
          <Button style={{backgroundColor: 'gold', color: 'red', fontFamily: 'monospace'}} onClick={() => handleNoteClick('Rhythm')}>Rhythm</Button>
          <Button style={{backgroundColor: 'gold', color: 'red', fontFamily: 'monospace'}} onClick={() => handleNoteClick('Melody')}>Melody</Button>
          <Button style={{backgroundColor: 'gold', color: 'red', fontFamily: 'monospace'}} onClick={() => handleNoteClick('Harmony')}>Harmony</Button>
        </div>
      <ToastContainer/>
      <br/>
      <fieldset>
        <SpaceNotes/>
      </fieldset>
      <br/>
    </div>
  );
};

export default NotesExercise;



/*
export default function LessonLine(){
    return(
        <div>
            <h3>Pentagram!!</h3>
            <br/>
            <Popup trigger={<Fab>Line 1:</Fab>}>
                <p>Mi</p>
            </Popup>
        </div>
    )
}
*/

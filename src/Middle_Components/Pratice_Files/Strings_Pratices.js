import { Card, Grid, Button, StepButton } from '@mui/material';
import React, { useState } from 'react';
import AppDialog from './FilesPratices/DialogsFiles/Dialog';
import TrainerNoteDialog from './FilesPratices/DialogsFiles/DialogChord';
import DialogMemoryGame from './FilesPratices/DialogsFiles/MemoryDialog';
import DialogPuzzle from './FilesPratices/DialogsFiles/DialogPuzzle';
import DialogRhythm from './FilesPratices/DialogsFiles/DialogRhythm';
import DialogTriviaSong from './FilesPratices/DialogsFiles/DialogTrivia';
import DialogSongString from './FilesPratices/DialogsFiles/DialogStringSong';
import DialogMusicQuizzess from './FilesPratices/DialogsFiles/DialogQuizzMusic';
import DialogMemorization from './FilesPratices/DialogsFiles/DialogMemorization';
import DialogAcerts from './FilesPratices/DialogsFiles/DialogAcerts';
import DialogCatch from './FilesPratices/DialogsFiles/DialogNotesPlay';
import DialogFingeringViolin from './FilesPratices/DialogsFiles/DialogFingering';
import DialogTestCompass from './FilesPratices/DialogsFiles/DialogCompassFormule';
import DialogSightTrainer from './FilesPratices/DialogsFiles/dialogSightTrainer';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Violin from './PraticaNotas';
import ViolinDominion from '../Violin_Interp/Pratice_Lessons_Violin';
import ViolaDominion from '../Viola_Interp/Pratices_Lesson_Viola';
import CelloPratice from '../Cello_Interp/Pratice_Cello_Lesson';
import Metronome from './FilesPratices/SortingInputs';
import DialogClaves from './FilesPratices/DialogsFiles/DialogCelloPauta';
import DialogNotesFigures from './FilesPratices/DialogsFiles/DialogNotesFigures';
import AppWallet from '../Creator_Of_Card/CardWallet';
import MyApp from '../Creator_Of_Card/CardCreator';
import RecognizeNote from '../Creator_Of_Card/FoundNote';

export default function FirstStud(){
    const [trueOpen, setTrueOpen] = useState(false);
    const openingModal = () => {
        setTrueOpen(!trueOpen);
    };
    const StyleButton = {
        botao: {
            backgroundColor: 'lightblue',
            color: 'black',
            fontFamily: 'serif',
        }
    };
    return(
        <div style={{backgroundColor: 'blue', float: 'left', height: '6300px'}}>
            <div style={{width: '750px', height: '6300px'}}>
                <ViolinDominion/>
                <ViolaDominion/>
                <CelloPratice/>
            <br/><br/>
            <fieldset><br/><hr/>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Card style={{width: '700px', margin :'35px', height: '1700px',backgroundColor: 'darkcyan'}}>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Rhythm Game</summary>
                                        <br/><br/>
                                        <DialogRhythm/>
                                            </details>
                                        </StepButton>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <StepButton style={{backgroundColor: 'midnightblue'}}>
                                            <details><summary style={{color: 'gold'}}>Pratices questionary Game</summary>
                                        <DialogMusicQuizzess/>
                                    </details>
                                </StepButton>
                                <br/>
                                <hr/>
                                <br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Questionary 1 Game</summary>
                                        <DialogSongString/>
                                    </details>
                                </StepButton>
                                <br/>
                                <hr/>
                                <br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Questionary 2 Game</summary>
                                        <DialogTriviaSong/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Puzzle Game</summary>
                                        <DialogPuzzle/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Add notes at a pentagrams</summary>
                                        <DialogMemoryGame/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Trainer of Notes</summary>
                                        <TrainerNoteDialog/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Notes Marker</summary>
                                        <AppDialog/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Memory Timer</summary>
                                        <DialogMemorization/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Guess the Arpejos and the Scales</summary>
                                        <DialogAcerts/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Catch Game</summary>
                                        <DialogCatch/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Put note and the Fermata</summary>
                                        <DialogFingeringViolin/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Compass Formule Game</summary>
                                        <DialogTestCompass/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Sigth Trainer Game</summary>
                                        <DialogSightTrainer/>
                                    </details>
                                </StepButton>
                                <br/><br/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Sounds Notes Violin</summary>
                                        <Violin/>
                                    </details>
                                </StepButton><br/><br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold', fontFamily: 'revert'}}>Clave Exercise</summary>
                                        <DialogClaves/>
                                    </details>
                                </StepButton>
                                <br/><br/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold', fontFamily: 'revert'}}>Add figures!</summary>
                                        <DialogNotesFigures/>
                                    </details>
                                </StepButton>
                                <br/><br/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold', fontFamily: 'revert'}}>Get the right note!!!!!</summary>
                                        <RecognizeNote/>
                                    </details>
                                </StepButton>
                            </Card>
                            </td>
                        </tr>
                    </tbody>
                </table><br/><br/>
                <fieldset>
                    <center>
                        <h1>Keep going ahead on the scale formulary</h1>
                        <br/>
                        <h3>Create an Card and put the first note of the scale on the title and after you will must to put the whole scale at the description below the titel</h3>
                        <AppWallet/>
                        <MyApp/>
                    </center>
                </fieldset>
                <br/><hr/><br/>
                <Button style={StyleButton.botao} onClick={openingModal}>Chords lesson here! (Click)</Button>
                <br/><br/>
                {trueOpen && (
                    <Metronome/>
                )}
                <br/>
            </fieldset>
            </div>
            <Grid style={{paddingLeft: '260px'}} container spacing={25}>
                <Button style={{backgroundColor: 'midnightblue'}}>
                    <Link style={{color: 'orange'}} to='/App'><ArrowBackIcon/></Link>
                </Button>
            </Grid>
        </div>
    )
}
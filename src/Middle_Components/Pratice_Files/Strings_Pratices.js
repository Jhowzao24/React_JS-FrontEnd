import { Card, Grid, Paper, Button, Fab, Divider, StepButton } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import React from 'react';
import Popup from 'reactjs-popup';
import ViolinPratice from '../Phases_Components/FirstPratice/ExecPratice/Violin_Notes_Parts';
import ViolaPratice from '../Phases_Components/FirstPratice/ExecPratice/Viola_Notes_Parts';
import VioloncelloPratice from '../Phases_Components/FirstPratice/ExecPratice/Violoncelo_Notes_Parts';
import { ContiVioloinLesson } from './style';
import QuizzViolin from './QuizzPratices/ViolinQuizz';
import NotesPositions from './FilesPratices/NotesViolin';
import NotesViola from './FilesPratices/NotesViola';
import ViolinQuizz from '../Avaliations_Files/PraticesAvaliations/Violin_Quizz';
import ViolaQuizz from '../Avaliations_Files/PraticesAvaliations/QuizzViola';
import Quiz from '../Avaliations_Files/PraticesAvaliations/CelloQuizz/CelloQuizz';
import ViolaSents from '../Avaliations_Files/PraticesAvaliations/ViolaQuizz';
import SongTrivia from '../Avaliations_Files/PraticesAvaliations/ViolinTrivia';
import ViolaVirtuoso from '../Avaliations_Files/PraticesAvaliations/Virtuoso';
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
import Questionario from '../Avaliations_Files/PraticesAvaliations/IALesson';
import DialogSightTrainer from './FilesPratices/DialogsFiles/dialogSightTrainer';
import MusicCreationScreen from './FilesPratices/CreatePent';
import ArcoViolino from './FilesPratices/BowDemonstration';
import SoundPlayer from './FilesPratices/CellAfnination';
import ViolinAfin from './FilesPratices/AfinatorViolin';
import ViolaAfin from './FilesPratices/AfinatorViola';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Violin from './PraticaNotas';

export default function FirstStud(){
    return(
        <div style={{backgroundColor: 'blue', float: 'left',}}>
            <div style={{width: '700px', height: '3800px'}}>
            <Card>
                <Paper>
                    <Popup trigger={<Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px'}}>Parts of the Violin</Button>}>
                        <Card style={{width: '700px', height: '625px', backgroundColor: 'midnightblue', borderStyle: 'ridge',
                        borderColor: 'darkcyan'}}>
                            <Grid style={{paddingLeft: '40px', paddingTop: '15px'}} container spacing={0}>
                            <img alt='partsviolin' style={{width: '600px', height: '600px', borderRadius: '20px'}}
                                src='https://i.ebayimg.com/images/g/uakAAOSwdLpf5vGY/s-l640.jpg'/>
                                <Grid style={{paddingLeft: '580px'}} container spacing={73}>
                                    <Popup trigger={<Fab style={{fontSize: '18px', width: '100px', height: '50px'}}>Volute <ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                    <Card style={{width: '200px', height: '120px'}}>
                                    <h2 style={{fontSize: '15px'}}><strong>Volute</strong></h2>
                                    <i>This part of the violin  is the head of the violin, it has the caracol form</i>
                                </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '520px'}} container spacing={60}>
                                    <Popup trigger={<Fab style={{fontSize: '10px', width: '100px', height: '50px'}}>Violin's Arm<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                        <Card style={{width: '360px', height: '90px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Arm</strong></h2>
                                            <i>This part is the part that you will put your thumb to support</i>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '270px'}} container spacing={30}>
                                    <Popup trigger={<Fab style={{fontSize: '10px', width: '100px', height: '50px'}}>Rear Top<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                        <Card style={{width: '360px', height: '90px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Rear Top</strong></h2>
                                            <i>This part is the back of the violin, so his function is to receive the vibration from the Violin's Soul</i>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '850px'}} container spacing={70}>
                                    <Popup trigger={<Fab style={{fontSize: '10px', width: '100px', height: '50px'}}>Harpsichords(Cravelhas)<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                        <Card style={{width: '360px', height: '90px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Harpsichords(Cravelhas)</strong></h2>
                                            <i>This part is use to affinated the Violin's strings at the superior point</i>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '1000px'}} container spacing={68}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/>Pestana</Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Strings</strong></h2>
                                            <i>Located at the end of the mirror, this part is so small, you can hardly see it, but this is really important</i><Divider/>
                                            <p>This is the downed of the string</p><Divider/>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '880px'}} container spacing={55}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/>Strings</Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Strings</strong></h2>
                                            <i>As you are seeing there, the violin has four notes at his strings, This notes is: </i><Divider/>
                                            <p>Side Right: MI, LÁ</p><Divider/>
                                            <p>Side Left: RÉ, SUN</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '800px'}} container spacing={45}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/>Mirror</Fab>}>
                                        <Card style={{width: '160px', height: '260px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Mirror</strong></h2>
                                            <i>This black table that you are seeing</i><Divider/>
                                            <p>this will reflect sounds from the position of the notes, where you to put your finger, there will be a note</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '650px'}} container spacing={45}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}>Front Top<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/></Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Front Top</strong></h2>
                                            <i>Important part</i><Divider/>
                                            <p>It will receive more vibrations from the violin's soul, if you never knew this, stay knowing, the sound in the violin, will be reflected from de soul, and it will be distributed for the two tops</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '530px'}} container spacing={30}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}>Violin's F<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/></Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Fs</strong></h2>
                                            <i>This two formates is the more important piece at the instrument</i><Divider/>
                                            <p>Because this two F pieces will be the exit of the sound's air, at the case, if this two pieces didn't exist there, the sounds would not exit</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '690px'}} container spacing={27}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/>Easel</Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Easel</strong></h2>
                                            <i>So, all you have been saw until here, receive vibration's sounds!</i><Divider/>
                                            <p>But this instrument's piece is the first piece that will receive the all strongs vibration's sounds from the strings</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '590px'}} container spacing={15}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', float: 'left', fontSize: '20px'}}/>Estandarte</Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Estandarte</strong></h2>
                                            <i>This is the other important piece</i><Divider/>
                                            <p>This is the piece that catch the four strings to fine-tune notes in small tones</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '300px'}} container spacing={8}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}>Chin Supporter<ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/></Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Queixeira</strong></h2>
                                            <i>Supporting you on instrument</i><Divider/>
                                            <p>You will Support your chin there andplay your instrument with class!!</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                </Grid>
                            </Card>
                        </Popup>
                </Paper>
            </Card><hr/>
            <Card>
                <Paper>
                    <Popup trigger={<Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px'}}>Parts of the Erudit Viola</Button>}>
                        <Card style={{backgroundColor: 'Highlight', width: '600px', height: '600px'}}>
                            <img style={{width: '400px', height: '500px'}} src='https://images.tcdn.com.br/img/img_prod/604952/viola_profissional_4_4_783_2_20200915130944.png' alt='violaerudita'/>
                            <Grid style={{paddingLeft: '780px'}} container spacing={60}>
                                <Paper style={{height: '200px', width: '100px', color: 'blue', fontFamily: 'fantasy', letterSpacing: '3px'}}>
                                    If you view the Violin's parts, you will notice that the Viola's parts is equal
                                </Paper>
                            </Grid>
                        </Card>
                    </Popup>
                </Paper>
            </Card><hr/>
            <Card>
                <Paper>
                    <Popup replacement='center' trigger={<Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px'}}>Cello Pratice</Button>}>
                        <Card style={{width: '900px'}}>
                            <Grid style={{paddingLeft: '280px', paddingTop: '30px'}}>
                                <img style={{width: '200px', height: '150px'}} src='https://th.bing.com/th/id/OIP.JbB95T5mPW_83HqAyNO-iQHaE6?pid=ImgDet&rs=1' alt='sentadoviolon'/>
                            </Grid>
                            <Questionario/>
                        </Card>
                    </Popup>
                </Paper>
            </Card><hr/>
            <Grid container spacing={0}>
                <Card>
                    <ViolinPratice/>
                </Card>
            </Grid>
            <Grid style={{paddingLeft: '268px'}} container spacing={5}>
                <Card>
                    <ViolaPratice/>
                </Card>
            </Grid>
            <Grid style={{paddingLeft: '490px'}} container spacing={5}>
                <Card>
                    <VioloncelloPratice/>
                </Card>
            </Grid>
            <h3 style={{color: 'gold'}}>Lets pratice on real</h3><hr/><br/>
            <Grid style={{float: 'left'}} container spacing={0}>
            <Popup trigger={<Button style={{color: 'cyan', backgroundColor: 'midnightblue', boxShadow: '0 0 5px 5px'}}>
            <Grid container spacing={0} style={{paddingLeft: '4px'}}>
                <img style={{width: '105px', height: '105px', borderRadius: '50px', margin: '-25px', filter: 'brightness(270%)'}} src='https://th.bing.com/th/id/R.fd611207ec7bc7d5cee788062136bca4?rik=z1zFN%2fyJMEZdhw&riu=http%3a%2f%2fi.kinja-img.com%2fgawker-media%2fimage%2fupload%2fs--nS1Ak5qC--%2fx1n1e6clvtdf5hvxaald.gif&ehk=YAj27KdtOCMoZmfNjLVBf2oSYRWcR4UBPFRnikMjOXA%3d&risl=1&pid=ImgRaw&r=0' alt='imagemBow'/>
            </Grid>
            Playing a Bow</Button>}>
                <ContiVioloinLesson>
                    <center>
                        <h1>Play the button below, and hear a sound</h1>
                        <h3>You must to play it by the sequences described below!</h3>
                        <h5>4/4; 3/4; 2/2</h5>
                        <ArcoViolino/>
                    </center>
                </ContiVioloinLesson>
            </Popup>
            </Grid>
            <Grid container spacing={8} style={{ float: 'left', paddingLeft: '350px'}}>
                <Popup trigger={<Button style={{backgroundColor: 'orange', color: 'midnightblue', boxShadow: '0 0 5px 5px', fontFamily: 'serif'}}>
                <Grid container spacing={0} style={{paddingLeft: '4px'}}>
                    <img style={{width: '105px', height: '105px', borderRadius: '50px', margin: '-25px', filter: 'brightness(150%)'}} src='https://media1.giphy.com/media/p92Pip4uIcuGY/giphy.gif?cid=ecf05e47t88nqsu4xdr4aabjipqesjkxrwrto90sqmlg378z&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='imagemBow'/>
                </Grid>
                Cello Tuner</Button>}>
                    <SoundPlayer/>
                </Popup>
            </Grid>
            <Grid container spacing={-5} style={{ float: 'left', paddingTop:'40px'}}>
                <Popup trigger={<Button style={{backgroundColor: 'orange', color: 'midnightblue', boxShadow: '0 0 5px 5px', fontFamily: 'serif'}}>
                <Grid container spacing={0} style={{paddingLeft: '4px'}}>
                    <img style={{width: '105px', height: '105px', borderRadius: '50px', margin: '-25px', filter: 'brightness(150%)'}} src='https://i.gifer.com/origin/46/4684444c1779f92677ccfe1336e55a2b_w200.gif' alt='imagemBow'/>
                </Grid>
                Violin Tuner</Button>}>
                    <ViolinAfin/>
                </Popup>
            </Grid>
            <Grid container spacing={13.5} style={{ float: 'left', paddingLeft: '395px', paddingTop:'40px'}}>
                <Popup trigger={<Button style={{backgroundColor: 'orange', color: 'midnightblue', boxShadow: '0 0 5px 5px', fontFamily: 'serif'}}>
                <Grid container spacing={0} style={{paddingLeft: '4px'}}>
                    <img style={{width: '105px', height: '105px', borderRadius: '50px', margin: '-25px', filter: 'brightness(100%)'}} src='https://media4.giphy.com/media/5xtDarJ5dhYzsOCYYlW/giphy.gif?cid=ecf05e4735qcscb75464e3kilc8bszc4377nssdle0bour5d&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='imagemBow'/>
                </Grid>
                Viola Tuner</Button>}>
                    <ViolaAfin/>
                </Popup>
            </Grid><br/><br/><br/><br/><br/><br/>
            <fieldset>
                <div style={{margin: '50px'}}>
                <fieldset style={{backgroundColor: 'dodgerblue', borderColor: 'midnightblue', boxShadow: '0 0 20px 10px', width: '50px', height: '200px', borderRadius: '500px', textAlign: 'center'}}>
                    <NotesPositions/>
                </fieldset>
                    <Grid style={{paddingLeft: '340px'}} container spacing={31}>
                        <Popup trigger={<Fab style={{backgroundColor: 'orangered', color: 'white', float: 'left', boxShadow: '0 0 5px 5px',}}><strong>Quizz</strong></Fab>}>
                            <QuizzViolin/>
                        </Popup>
                    </Grid>
                    <Grid style={{paddingLeft: '70px', paddingTop: '210px'}} container spacing={10}>
                        <Popup trigger={<Fab style={{backgroundColor: 'yellow', color: 'midnightblue', float: 'right', boxShadow: '0 0 5px 5px',}}><strong>Quizz</strong></Fab>}>
                            <ViolinQuizz/>
                        </Popup>
                    </Grid>
                    <Grid style={{paddingLeft: '250px'}} container spacing={7}>
                        <Popup trigger={<Fab style={{backgroundColor: 'Highlight', color: 'cyan', float: 'right', boxShadow: '0 0 5px 5px',}}><strong>Quizz</strong></Fab>}>
                            <SongTrivia/>
                        </Popup>
                    </Grid>
                    <Grid style={{paddingLeft: '595px', paddingTop: '200px'}} container spacing={47}>
                        <Popup trigger={<Fab style={{backgroundColor: 'aliceblue', color: 'Highlight', float: 'right', boxShadow: '0 0 5px 5px',}}><strong>Quizz</strong></Fab>}>
                            <Quiz/>
                        </Popup>
                    </Grid>
                    <Grid style={{paddingLeft: '230px', paddingTop: '200px'}} container spacing={33}>
                        <Popup trigger={<Fab style={{backgroundColor: 'darkslateblue', color: 'white', float: 'right', boxShadow: '0 0 5px 5px',}}><strong>Quizz</strong></Fab>}>
                            <Quiz/>
                        </Popup>
                    </Grid>
                </div><br/><br/><br/><hr/>
                <div style={{margin: '50px'}}>
                <fieldset style={{backgroundColor: 'dodgerblue', borderColor: 'midnightblue', boxShadow: '0 0 20px 15px', borderRadius: '300px', width: '100px'}}>
                    <NotesViola/>
                </fieldset>
                <Grid style={{float: 'left', paddingLeft: '330px'}} container spacing={30}>
                        <Popup trigger={<Fab style={{boxShadow: '0 0 5px 5px', backgroundColor: 'orange', color: 'midnightblue'}}>Quizz</Fab>}>
                            <ViolaQuizz/>
                        </Popup>
                    </Grid>
                    <Grid style={{float: 'left', paddingLeft: '50px'}} container spacing={6.7}>
                        <Popup trigger={<Fab style={{boxShadow: '0 0 5px 5px', backgroundColor: 'orange', color: 'midnightblue'}}>Quizz</Fab>}>
                            <ViolaSents/>
                        </Popup>
                    </Grid>
                    <Grid style={{float: 'left', paddingLeft: '240px'}} container spacing={6.7}>
                        <Popup trigger={<Fab style={{boxShadow: '0 0 5px 5px', backgroundColor: 'orange', color: 'midnightblue'}}>Quizz</Fab>}>
                            <ViolaVirtuoso/>
                        </Popup>
                    </Grid>
                </div><hr/>
                <Card style={{width: '700px', margin :'35px', height: '1500px',backgroundColor: 'darkcyan'}}>
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
                    <details><summary style={{color: 'gold'}}>Memory Game</summary>
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
                    <details><summary style={{color: 'gold'}}>Acerts Game</summary>
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
                    <details><summary style={{color: 'gold'}}>Describing Game</summary>
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
                </StepButton>
                </Card>
                <br/><hr/><br/>
                <MusicCreationScreen/>
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
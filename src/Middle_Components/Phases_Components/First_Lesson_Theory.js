import React, { useEffect, useState, useRef } from 'react';
import { Button, FormLabel, Paper, Grid, Alert, Card, Fab, Tooltip } from '@mui/material';
import Popup from 'reactjs-popup';
import Soms from './Middles_Images/Soms.jpeg';
import music from './Middles_Images/music.jpeg';
import Melody from './Middles_Images/Melody.jpg';
import Timbre from './Middles_Images/Timbre.jpg';
import duration from './Middles_Images/duration.jpeg';
import AltSound from './Middles_Images/AltSound.gif';
import intensit from './Middles_Images/intensit.png';
import giphyViolin from './Middles_Images/giphyViolin.gif';
import QuizzOneTime from '../Avaliations_Files/TeoryAvaliationsQuizz/QuizzPhaseOne';

export default function FirstComp(){
    const [showModal, setShowModal] = useState(false)
    const modalRef = useRef(null);
    const close = () => setShowModal(false)
    useEffect(() => {
        /*const timeout = setTimeout(() => {
            setShowModal(true)
        }, 5000)*/
    }, [])
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.createComment = `You clicked ${count} time`
    })
    return (
        <div style={{nackgroundColor: 'Highlight', width: '300px', height: '900px'}}>
            <Card style={{width: '1100px', height: '1200px'}}>
                <center style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '10px'}}>Music and Sound</center>
                <Card style={{paddingLeft: '20px'}}>
                    <Grid style={{paddingLeft: '35px', paddingTop: '60px'}} container spacing={5}>
                    <img style={{width: '70px', height: '70px', borderRadius: '50px'}} src={music} alt='musica'/>
                    <FormLabel style={{opacity: 'revert-layer', color: 'blue', fontFamily: 'monospace'}}>What is Music ?</FormLabel>
                    <Paper style={{backgroundColor: 'Highlight', color: 'gold', fontFamily: 'serif', fontSize: '15px'}}>
                        <p>It is the most beautifull form to express our feelings by the coordinated sounds madeby voices and instruments</p>
                        <i>This take we all to a closed location at the music, that is the understandly goals that you are increased to improve</i>
                        </Paper>
                    </Grid>
                    <Grid style={{float: 'left'}}>
                        <img style={{width: '70px', height: '70px', borderRadius: '50px'}} src={Soms} alt='som'/>
                        <Grid style={{paddingLeft: '260px'}}  container spacing={8}>
                        <Paper style={{backgroundColor: 'midnightblue', color: 'gold'}}>
                        <FormLabel style={{opacity: 'revert-layer', color: 'Highlight', fontFamily: 'serif', fontSize: '15px'}}>What is Sound?</FormLabel>
                            <p>Sound is all we hear, so... The sound is formated by the propagation of waves in the air</p>
                            <i>So, a beat, a duck making noises, a motor's cars making noises, an instrument playing, is sound!!</i>
                        </Paper>
                        <Grid id='meu-modal' ref={modalRef} className='modal-beaut'>
                            {
                                showModal && (
                                    <Card style={{backgroundColor: 'Highlight', color: 'gold'}} id='meu-modal'>
                                        <p>Hello World</p>
                                        <Button style={{color: 'gold'}} onClick={close}>C</Button>
                                    </Card>
                                )
                            }
                        </Grid>
                        </Grid>
                    </Grid>
                </Card>
                <hr style={{borderColor: 'Highlight'}}/>
                <center style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '10px'}}>Musics Elements</center>
                <Card style={{paddingLeft: '20px',height: '300px'}}>
                    <img style={{widht: '70px', height: '70px', borderRadius: '50px'}} src={Melody} alt='melodia'/>
                    <FormLabel style={{opacity: 'revert-layer', color: 'Highlight', fontFamily: 'serif', fontSize: '15px'}}>What is Melody ?</FormLabel>
                    <Grid style={{paddingLeft: '400px'}} container spacing={8}>
                    <Paper style={{backgroundColor: 'Highlight', color: 'gold', width: '600px', fontFamioly: 'serif', fontSize: '15px'}}>
                        <p>It is the Successive of Sounds productions <b>||</b> <i>Could you remmember the queue</i></p>
                    </Paper>
                    </Grid>
                <div style={{float: 'left', paddingLeft: '20px', paddingTop: '15px'}}>
                    <img style={{width: '200px', height: '70px', borderRadius: '50px'}} src='https://th.bing.com/th/id/OIP.VVt1_c7o_F5MbwO8CmB0zAHaCQ?pid=ImgDet&rs=1' alt='melodia'/>
                    <FormLabel style={{opacity: 'revert-layer', color: 'Highlight', fontFamily: 'serif', fontSize: '15px'}}>What is Harmony ?</FormLabel>
                    <Grid style={{paddingLeft: '377px'}} container spacing={8}>
                    <Paper style={{backgroundColor: 'Highlight', color: 'gold', fontFamily: 'serif', fontSize: '15px'}}>
                        <p>It is the ordered sounds productions of various differents sounds simultaniously</p> 
                    </Paper>
                    </Grid>
                </div>
                <Grid container spacing={0}>
                <div style={{paddingLeft: '15px', paddingTop: '20px'}}>
                    <img style={{width: '190px', height: '70px', borderRadius: '50px'}} src='https://i0.wp.com/nurseonline.co.il/wp-content/uploads/2021/08/normal-sinus-rhythm-gif.gif?fit=1736%2C254&ssl=1' alt='melodia'/>
                    <FormLabel style={{opacity: 'revert-layer', color: 'Highlight', fontFamily: 'serif', fontSize: '15px'}}>What is Rhythm ?</FormLabel>
                    <Grid style={{paddingLeft: '377px'}} container spacing={8}>
                    <Paper style={{backgroundColor: 'gold', color: 'Highlight', fontFamily: 'serif', fontSize: '15px'}}>
                        <p>It is the time's ordered division | it Having the one unic beat for each time's division</p>
                        <i>So, each beat that is sounded, will divid the time simultaniously, because, each time we go to next beat, this will acomulate</i> 
                    </Paper>
                    <Tooltip style={{backgroundColor: 'midnightblue'}} title={count}>
                    <Button style={{fontSize: '12px', fontFamily: 'serif', color: 'lightblue', backgroundColor: 'Highlight'}} onClick={() => setCount(count + 1)}>One beat is like a one click! CLICK</Button>
                    </Tooltip>
                    </Grid>
                </div>
                </Grid>
                </Card>
                <hr style={{borderColor: 'midnightblue'}}/>
                <Paper>
                    <center style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '10px'}}>Properties of sound</center>
                    <div style={{paddingLeft: '100px', float: 'left'}}>
                    <Popup trigger={<Fab style={{backgroundColor: 'aqua', color: 'midnightblue', fontFamily: 'fantasy'}}>Timbre</Fab>}>
                        <img style={{width: '100px', height: '100px'}} src={Timbre} alt='timbre'/>
                        <i>It is the distinction of producted sounds by different sonorous fonts!<br/>
                        being on the same height and intensity; It's thecolor of sound</i>
                        <Card style={{width: '500px', backgroundColor: 'Highlight', color: 'gold'}}><ul>We can indentify distincts sounds of others</ul>
                        <ul>By example: We can to indentify a sound that is play by violin, and distinct others
                            different sounds that is played by other instruments, by thisproperty we candifferency the sounds
                        </ul>
                        </Card>
                    </Popup>
                    </div>
                    <div style={{paddingRight: '200px', float: 'right'}}>
                    <Popup trigger={<Fab style={{backgroundColor: 'aqua', color: 'midnightblue', fontFamily: 'fantasy'}}>Duration</Fab>}>
                        <Card>
                        <img style={{width: '100px', height: '100px'}} src={duration} alt='duracao'/>
                        <i>It is the sustentation of sound in a determined space of time</i>
                        <ul>This will determine if the sound is SHORT or LONG</ul>
                        </Card>
                    </Popup>
                    </div>
                    <div style={{paddingRight: '200px', float: 'right'}}>
                    <Popup trigger={<Fab style={{backgroundColor: 'aqua', color: 'midnightblue', fontFamily: 'fantasy'}}>Height</Fab>}>
                        <Card>
                            <img style={{width: '200px', height: '200px', borderRadius: '100px'}} src={AltSound} alt='alturaH'/>
                            <i>It is the properties of waves sounds frequences that permited us to distinct between some
                                sounds, ("Bass, Medium, High-pitched"), How much minor is the sounds frequence,
                                more bass is this sound. How much greatter the frequence, more High-pitched is the sound
                            </i>
                        </Card>
                    </Popup>
                    </div>
                    <div style={{float: 'right', paddingRight: '200px'}}>
                    <Popup trigger={<Fab style={{backgroundColor: 'aqua', color: 'midnightblue', fontFamily: 'fantasy'}}>Intensity</Fab>}>
                        <Card style={{width: '300px'}}>
                            <i>This will help you to distinct the different of weak sounds and the strong sounds</i>
                            <p>Look this two examples below</p>
                            <ul>
                                <img style={{width: '200px', height: '200px'}} src={intensit} alt='sons'/>
                            </ul>
                            <p>As you can look it, the width and the amplitud, how much more width is puted
                                the sound is gonna be weak, and the other way, the sound will turn to
                                the strong
                            </p>
                        </Card>
                    </Popup>
                    </div>
                </Paper><br/><hr/><br/><hr/><br/><hr/><br/>
                <div style={{paddingLeft: '500px', paddingBotton: '70px'}}>
                <Button>
                    <Card style={{float: 'right', width: '500px', height: '500px', paddingBotton: '20px'}}>
                        <h3>I believe that when you end this all knoledges, you will be inspired so much</h3>
                        <hr style={{borderColor: 'Highlight'}}/>
                        <img style={{height: '300px'}} src={giphyViolin} alt='violinogif'/>
                    </Card>
                </Button>
                </div>
                <Grid style={{float: 'left', paddingLeft: '500px'}} container spacing={60}>
                    <fieldset style={{borderColor: 'midnightblue'}}>
                        <h3>So...,<br/> Answer this Quizz,<br/> to see if you learned<br/> all about the First Phase the theory</h3>
                    <Button style={{backgroundColor: 'dodgerblue', color: 'gold', fontFamily: 'serif'}}>
                        <details><summary>Quizz Exercise!</summary>
                            <Alert>
                                <QuizzOneTime/>
                            </Alert>
                        </details>
                    </Button>
                    </fieldset>
                </Grid>
            </Card>
        </div>
    )
}
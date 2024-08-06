import { Button, Divider, Grid, Paper, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import intensity from './Middles_Images/intensity.jpg';
import Popup from 'reactjs-popup';
import QuizzDez from '../Avaliations_Files/TeoryAvaliationsQuizz/QuizzPhaseTen';


export default function DecimaFase(){
    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
      setIsFullScreen(!isFullScreen);
    };
    return(
      <div>
        <header>
          <Button style={{backgroundColor : 'cyan', color: 'blue'}} onClick={toggleFullScreen}>
            {isFullScreen ? 'Exit Full Screen' : 'Phase 10'}
          </Button>
          {isFullScreen && (
            <div>
              <div className={`card ${isFullScreen ? 'full-screen' : ''}`}>
                <FaseDez/>
                {isFullScreen && (
                  <Button style={{color: 'blue', backgroundColor: 'orangered'}} onClick={toggleFullScreen} className="return-button">
                    Return
                  </Button>
                )}
              </div>
            </div>
          )}
        </header>
      </div>
    )
  }


function FaseDez(){
    const tip1 = [
        <div>
            <img style={{width: '450px', height: '300px'}} src={intensity} alt='intensidade'/>
        </div>
    ]
    const signalInt = [
        <div>
            <p>When the signal of increassing and decreassing do not have a dinamic espacificate, the interpreter must to grow up only a level or only down a level. By example, if it be sounding <i>"mp"</i>, and appear a signal of increassing, it must to climb to <i>"mf"</i>, and not to <i>"ff"</i> or <i>"fff"</i>. The dinamic is gradual</p>
            <img src='' alt='sinalIndicate'/>
        </div>
    ]
    const signalsIndication = [
        <div>
            <h3>The signals of indication can to be considered by the followed signals below: 
                <ul>
                    <img src='' alt='signalsIndic'/>
                    <Divider/>
                    <p>When there is a signal of increassing and deacreassing, a lot times the composithor still indicate what is the begin dinamic and the end dinamic. By example: <img src='' alt='dinamicsigns'/>, when the interpreter has to depart of a pianissimo sound and to come a strongest sound to the end of the increassing signal</p>
                    <Divider/>
                    <img src='' alt='increassingDeacreassing'/>
                </ul>
            </h3>
        </div>
    ]
    return(
        <div style={{width: '1300px', height: '700px', backgroundColor: 'cadetblue'}}>
            <h1 style={{textAlign: 'center'}}>Dinamic</h1>
            <h4>What is this on real?
                <ul>
                    <h5>It is the variation of the sounds intensity of a gradual way, both to a strongest intensity both to a weakest intensity</h5>
                    <Divider style={{borderColor: 'blue'}}/>
                    <h5>The graduations of sounds intensity can to be to indicated at the scores, by abreviators from  italian terms, normaly putted at the under part of the pentagram, but it stills can to occur without any indication, of natural model, following the logic sense of the music</h5>
                </ul>
            </h4>
            <center><p>Pass the nouse above the texts to leran more</p></center>
            <Grid style={{paddingLeft: '20px'}}>
                <Tooltip arrow placmente='right-start' title={tip1}>
                    <i style={{width: '400px', backgroundColor: 'blue', borderRadius: '10px', color: 'gold', fontFamily: 'serif'}}>Dinamic Indication</i>
                </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '300px'}} container spacing={4}>
                <Tooltip title={signalsIndication}>
                    <p style={{backgroundColor: 'blue', color: 'gold', fontFamily: 'serif', borderRadius: '20px'}}>Signs by indication</p>
                </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '20px'}}>
                <Tooltip title={signalInt}>
                    <p style={{backgroundColor: 'blue', color: 'gold', fontFamily: 'serif', width: '360px', borderRadius: '20px'}}>Understanding of other way the increasssing and decreassing</p>
                </Tooltip>
            </Grid>
            <Popup trigger={<Button style={{backgroundColor: 'midnightblue', color: 'white', paddingLeft: '100px'}}>Increassing & decreassing</Button>}>
                <Paper style={{margin: '10px', backgroundColor: 'midnightblue', color: 'orangered', fontFamily: 'serif'}}>
                    <h3>At the concerts all the musics is organized by the maestors make the signal to grow the sound or to down the sound with their hands, and you musician must to compaing the maestor while he is doing it</h3>
                </Paper>
            </Popup>
            <center>
                <fieldset style={{borderRadius: '30px', margin: '30px', borderColor: 'dodgerblue'}}>
                    <QuizzDez/>
                </fieldset>
            </center>
        </div>
    )
}
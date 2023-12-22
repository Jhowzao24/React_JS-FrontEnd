import { Divider, Grid, Tooltip, Button, Paper } from '@mui/material';
import React, {useState} from 'react';
import QuizzDesesseis from '../Avaliations_Files/TeoryAvaliationsQuizz/QuizzPhaseSixteen';

export default function DecimaSestaFase(){
    const solene = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '500px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>It is the form of to presentn before an authority recognizing your greatness, sounding with majesty, but ina respectfull manner. It is hymns and musics that we adress to God and to our Feelings</p>
        </div>
    ]
    const affettuoso = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>With Affection/Andante; Adagio; Largo</p>
        </div>
    ]
    const combrio = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>With Vigor/Allegro; Moderato; Andante</p>
        </div>
    ]
    const cantabile = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Singing; Liryc; Soft/Allegro; Moderato; Andante</p>
        </div>
    ]
    const vivace = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Alive(Soft and Fast)/Allegro</p>
        </div>
    ]
    const maestoso = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Majestic(Notes well marked)/Andante; Adagio</p>
        </div>
    ]
    const dolce = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Sweet(Lightweigh and with feellings)/Moderato; Andante; Adágio</p>
        </div>
    ]
    const agitato = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Hectic(Fatsand Dramatic)/Presto; Allegro; Allegreto</p>
        </div>
    ]
    const animato = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Cheerful/Presto; Allegro</p>
        </div>
    ]
    const bruscamente = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Abrupt(Very Marked)/Allegro; Presto</p>
        </div>
    ]
    const comamore = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>With Love/Moderato; Andante; Adagio</p>
        </div>
    ]
    const comfuoco = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>With fire(Alive, Agressive)/Allegro, Presto</p>
        </div>
    ]
    const scherzando = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Playing/Allegro, Andante</p>
        </div>
    ]
    const molto = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Very/(ex:Allegro molto cantabile = Alegro Very Singned)</p>
        </div>
    ]
    const assai = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Very(ex: Allegro Assai = Very Allegro)</p>
        </div>
    ]
    const poco = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>A litlte(ex: Allegro poco agitato = Fast a few hectic)</p>
        </div>
    ]
    const maNonTroppo = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>But not very(ex: Allegro Ma non Troppo = Alegro but not very)</p>
        </div>
    ]
    const [Phrase, setPhrase] = useState(false);
    const handleAddPhrase = () => {
        setPhrase(true);
    }
    const [Semiphrase, setSemiPhrase] = useState(false);
    const handleAddSemiphrase = () => {
        setSemiPhrase(true);
    }
    return(
        <div style={{width: '600px', margin: '-100px', backgroundColor: 'oldlace'}}>
            <center style={{margin: '30px'}}>
                <h1>Phrases and Semiphrases</h1>
                <Divider/>
                <h3>Phrase is a musical unit with conclusions sense; generally it is dividered by two semiphrases</h3>
                <br/>
                <hr/>
                <br/>
                <h4>Click one of the buttons and you will see where is positioned the caracters indicated</h4>
                <div style={{float: 'left', paddingLeft: '180px'}}><Tooltip title='Phrase is all the pentagram completed with all compassos! CLICK TO SEE IT ON THE PENTAGRAM BELOW:!'><Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={handleAddPhrase}>Phrase</Button></Tooltip></div>
                <div style={{float: 'right', paddingRight: '180px'}}><Tooltip title='SemiPhrase is the half of the full pentagram with the divider of the full number of the compassos'><Button style={{backgroundColor: 'orangered', color: 'white'}} onClick={handleAddSemiphrase}>Semiphrase</Button></Tooltip></div>
                <div>
                    <img style={{width: '500px'}} src='https://4.bp.blogspot.com/-qtcCxw2gU4I/Vd5IvK0dYoI/AAAAAAAAGcU/U23zST5m7Ic/s1600/Minueto%2B-%2BJ.%2BS.%2BBACH.jpg' alt='phrasesemiphrase'/>
                </div>
                <Grid style={{float: 'left', paddingLeft: '800px'}} container spacing={84}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>|_______________________Phrase_______________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '630px'}} container spacing={74}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '550px'}} container spacing={64}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '470px'}} container spacing={54}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '390px'}} container spacing={44}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '310px'}} container spacing={34}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '230px'}} container spacing={24}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '760px'}} container spacing={80}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|__________________SemiPhrase_________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '970px'}} container spacing={80}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|__________________SemiPhrase_______________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '600px'}} container spacing={70}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|_____________________SemiPhrase___________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '830px'}} container spacing={70}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '510px'}} container spacing={60}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '750px'}} container spacing={60}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '440px'}} container spacing={50}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '680px'}} container spacing={50}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|_____________________SemiPhrase____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '360px'}} container spacing={41}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '600px'}} container spacing={41}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '280px'}} container spacing={31}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '520px'}} container spacing={31}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '210px'}} container spacing={21}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|________________________SemiPhrase_______________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '460px'}} container spacing={21}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '10px'}}>|____________________SemiPhrase_________________|</p>}
                </Grid>
            </center>
            <hr/>
            <center>
                <h1>Musical Interpretation</h1>
                <Divider/>
                <h4 style={{margin: '20px'}}>The <strong>Musical Interpretation</strong> is the art of compreender the intenptions and the feelings of the composer and transmit it through the sound from the instrument. <strong>It is the Musical Expression</strong></h4>
                <br/>
                <ul>
                    <h5>The interpretation take in consideration the intensity of sound, the execution form of this sound, the speed, etc. The intepretation <strong>doesn't take in consideration</strong> the formula of compasso.</h5>
                    <h5>Asyou see a music with a formule like 2/4, it will not must to be executed fast or with a strong intensity of sound</h5>
                    <hr/>
                    <Paper>
                        <Tooltip title={solene}>
                            <h5>Solene</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={affettuoso}>
                            <h5>Affettuoso</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={combrio}>
                            <h5>Com Brio</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={cantabile}>
                            <h5>Cantabile</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={vivace}>
                            <h5>Vivace</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={maestoso}>
                            <h5>Maestoso</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={dolce}>
                            <h5>Dolce</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={agitato}>
                            <h5>Agitato</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={animato}>
                            <h5>Animato</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={bruscamente}>
                            <h5>Bruscamente</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={comamore}>
                            <h5>Com Amore</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={comfuoco}>
                            <h5>Com Fuoco</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={scherzando}>
                            <h5>Scherzando</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={molto}>
                            <h5>Molto</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={assai}>
                            <h5>Assai</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={poco}>
                            <h5>Poco</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={maNonTroppo}>
                            <h5>Ma non troppo</h5>
                        </Tooltip>
                    </Paper>
                </ul>
            </center>
            <br/><br/><br/>
            <QuizzDesesseis/>
        </div>
    )
}
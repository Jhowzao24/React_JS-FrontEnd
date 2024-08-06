import { Button, Divider, Grid, Paper, Tooltip } from '@mui/material';
import React, {useState} from 'react';
import QuizzCatorze from '../Avaliations_Files/TeoryAvaliationsQuizz/QuizzPhaseFourteen';

export default function KtorzeF(){
    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
      setIsFullScreen(!isFullScreen);
    };
    return(
      <div>
        <header>
          <Button style={{backgroundColor : 'cyan', color: 'blue'}} onClick={toggleFullScreen}>
            {isFullScreen ? 'Exit Full Screen' : 'Phase 14'}
          </Button>
          {isFullScreen && (
            <div>
              <div className={`card ${isFullScreen ? 'full-screen' : ''}`}>
                <FaseKatorze/>
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

function FaseKatorze(){
    const [showElement, setShowElement] = useState(false);
    const handleButtonClick = () => {
        setShowElement(true);
    }
    const [showOelement, setShowOelement] = useState(false);
    const handleButtonOelement = () => {
        setShowOelement(true);
    }
    const [showColch, setShowColch] = useState(false);
    const handleColchInser = () => {
        setShowColch(true);
    }
    return(
        <div style={{width: '1300px', height: '1000px', backgroundColor: 'darkblue', margin: '-40px', color: 'white'}}>
            <center>
                <h1>Punctuated notes</h1>
                <Paper style={{backgroundColor: 'grey'}}>
                    <h3>Differences at the subdivision</h3>
                </Paper>
                <Divider/>
                <h5>The musical metric, especially, on that reffers to the proportion between the figures, must to be ever respected. By it is important the attention to the metric on detterminated figures to not happen an error of execution, as it is the case of the punctuated quaver followed from semiquaver</h5>
                <hr/>
                <h6>For a best understanding, i let for you a litle lesson below:</h6>
                <h6>Obs:
                    <ul>
                        <h4>Pass the mouse over the images after you click the buttons bellow</h4>
                    </ul>
                </h6>
                <hr/>
                <img style={{width: '200px', float: 'left'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Music-halfnote.svg/200px-Music-halfnote.svg.png' alt='pontuadasnotas'/>
                <Grid style={{float: 'left', paddingLeft: '250px'}} container spacing={15}>
                    <p style={{color: 'white', fontSize: '50px'}}>.</p>
                </Grid>
                <img style={{width: '100px', float: 'left', paddingLeft: '70px'}} src='https://th.bing.com/th/id/R.2078125eb72ec67ea87b935a9b56cd4a?rik=j2Qqh%2fTX8T%2bPOQ&pid=ImgRaw&r=0' alt='addimagepoint'/>
                <br/><br/>
                <Button style={{backgroundColor: 'white', color: 'black'}} onClick={handleButtonClick}>Punctuated Minim</Button><br/>
                <br/><br/><br/><br/><br/><br/><br/>
                <Button style={{backgroundColor: 'white', color: 'black'}} onClick={handleButtonOelement}>Punctuated SeMinima</Button><br/>
                <Grid style={{float: 'left', paddingLeft: '470px'}} container spacing={30}>
                    {showElement && <Tooltip title='As you can to see, this note is equal this sum, a minim + semiminim is like = punctuated minim; So to understand it better, as the minim values two beats and  the semiminim values one beat, summing this two notes with different values we will have one only note with a value like  = 3, it is because summing a note with value 2 and other note with a value 1 we have this number of times in a one note enought'><img style={{width: '130px', height: '70px'}} src='https://th.bing.com/th/id/OIP.ffYFnofPT4EsthNU1Zv2dQAAAA?pid=ImgDet&rs=1' alt='ell'/></Tooltip>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '350px'}} container spacing={5}>
                    {showOelement && <Tooltip title='As you can to see here, we have this two forms to sum this notes to become a one unik note with all the values contented in each note'><img style={{width: '170px', height: '70px'}} src='https://th.bing.com/th/id/OIP.S9xBp3S6J88o7vM6_1yfmgHaCu?rs=1&pid=ImgDetMain' alt='elleme'/></Tooltip>}
                </Grid>
                <img style={{float: 'right', width: '200px', paddingRight: '50px'}} src='https://th.bing.com/th/id/R.d53b1fae5efb4a3d40e98d1ca5939d88?rik=ANaXXYksZLGORw&riu=http%3a%2f%2fwww.simbolos.net.br%2fwp-content%2fuploads%2f2013%2f11%2fcolcheia.png&ehk=xKSrlygJbY6xCWerfg3mEPUq29InuWMq8EI8ekilgsk%3d&risl=&pid=ImgRaw&r=0' alt='colchpoint'/>
                <Grid style={{float: 'left', paddingLeft: '200px'}} container spacing={15}>
                <Button onClick={handleColchInser} style={{backgroundColor: 'white', color: 'black'}}>Punctuated Quaver</Button>
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '1330px'}} container spacing={20}>
                    <p style={{color: 'white', fontSize: '50px'}}>.</p>
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '500px'}} container spacing={20}>
                    {showColch && <Tooltip title='This three notes is dividered in three half times of the middle time, the third note is the dot that is front of the note quaver'><img style={{width: '200px', height: '180px'}} src='https://th.bing.com/th/id/OIP.6B18nS3yWLgETBJzE8EZnAAAAA?pid=ImgDet&rs=1' alt='colcheiapotuada'/></Tooltip>}
                </Grid>
            </center>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <QuizzCatorze/>
        </div>
    )
}



/*    const [IrContent, setIrContente] = useState([])
    const handleIrreguAdd = () => {
        const newIrContente = ['Irregular']
        setIrContente([] +newIrContente);
    }*/
/*<img src='https://i.pinimg.com/236x/ef/c6/a0/efc6a0ab287800435af5a231ec265b36--piano-radio.jpg' alt='semicolcheia'/>*/
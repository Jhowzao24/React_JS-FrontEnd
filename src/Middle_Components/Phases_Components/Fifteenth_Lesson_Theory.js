import { Button, Grid } from '@mui/material';
import React, {useState} from 'react';
import QuizzQuinze from '../Avaliations_Files/TeoryAvaliationsQuizz/QuizzPhaseFifteen';


export default function DeciQuintaFase(){
    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
      setIsFullScreen(!isFullScreen);
    };
    return(
      <div>
        <header>
          <Button style={{backgroundColor : 'cyan', color: 'blue'}} onClick={toggleFullScreen}>
            {isFullScreen ? 'Exit Full Screen' : 'Phase 15'}
          </Button>
          {isFullScreen && (
            <div>
              <div className={`card ${isFullScreen ? 'full-screen' : ''}`}>
                <FaseQuinze/>
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




function FaseQuinze(){
    const [showAndamentNumb, setShowAndamentNumb] = useState(false);
    const handleAndante = () => {
        setShowAndamentNumb(true);
    }
    const [Counter, setCounter] = useState(0);
    const handleClickIncres = () => {
        setCounter(Counter + 1)
    }
    const [counteR, setcounteR] = useState(0);
    const handleClickDeacres = () => {
        setcounteR(counteR + 1)
    };
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        imageRendering: 'crisp-edges',  // Firefox
        WebkitImageRendering: 'optimize-contrast',  // Chrome, Safari
        msInterpolationMode: 'nearest-neighbor',  // Internet Explorer
      };
    return(
        <div style={{backgroundColor: 'lightblue', width: '1400px', margin: '-10px'}}>
            <center style={{margin: '50px'}}>
                <h1>Progress</h1>
                <hr/>
                <h2>Progress is the indication of speed putted at the begin of the musical piece</h2>
                <br/>
                <h3>Th progress can to be indicated by expression in Italian (Allegro, Andante, Presto, Adagio etc) or by marcations of speed, ever at the begin of the musical excerpt</h3>
            </center><br/>
            <center>
                <h3 style={{margin: '50px'}}>So, take a look atthe lesson below, and click on the button and you will see where the progress is putted</h3>
                <hr/>
                <img style={{width: '400px'}} src='https://th.bing.com/th/id/R.31170d85e58b4fbd36d60dd818b0d1a1?rik=UvzXK7CETIWx0Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-xQ0Kz_C-Myo%2fTpxRftkXEsI%2fAAAAAAAAAY0%2f1hoBqkz8S2M%2fs1600%2fBrilha%25252C%2bestrelinha.jpg&ehk=ANEGV5sr%2fNlVwvaTSVtshvo1RASFyLY1NRLhsjp4Qpg%3d&risl=&pid=ImgRaw&r=0' alt='andamento'/>
                <Grid style={{float: 'left', paddingLeft: '660px'}} container spacing={70}>
                    <Button style={{backgroundColor: 'grey', color: 'blue', fontFamily: 'serif'}} onClick={handleAndante}>Andamento</Button>
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '980px', position: 'relative'}} container spacing={63}>
                    {showAndamentNumb && <div><Grid style={{float: 'left', paddingLeft: '30px', paddingTop: '15px'}} container spacing={-4}><button style={{backgroundColor: 'dodgerblue', width: '20px', height: '18px', color: 'white'}} onClick={handleClickIncres}>+</button><p style={{fontSize: '12px', float: 'right', paddingLeft: '10px'}}>{Counter}-{counteR}</p><Grid style={{float: 'left', paddingLeft: '100px'}} container spacing={4}><button style={{width: '20px', height: '20px', color: 'white', backgroundColor: 'dodgerblue'}} onClick={handleClickDeacres}>-</button></Grid></Grid></div>}
                </Grid>
                <h5 style={{margin: '50px'}}>Whatever the progress choiced, every figures must to have your values insteaded with precision, it is, it must not to be a low speed to cut the values of the longs figures</h5>
            </center>
            <hr/>
            <center>
                <h2>Andamento Modification - (<i><strong>pocco rallentando</strong></i>)</h2>
                <center style={{margin: '70px'}}>
                    <fieldset style={{margin: '30px'}}>
                        <h2><i>Poco rallentando</i></h2>
                        <h4>Still write of this way = <i><strong>poco rall</strong></i></h4>
                        <h3>This indicate a few  reduction on the speed</h3>
                    </fieldset>
                    <h5>Look the example below:</h5>
                    <img style={imageStyle} src='https://th.bing.com/th/id/OIP.1Aox7C24y4-hW4X47PVToQHaBD?rs=1&pid=ImgDetMain' alt='pocorall'/>
                </center>
                <br/><br/><br/>
                <Grid container spacing={0} style={{paddingLeft: '350px'}}>
                    <QuizzQuinze/>
                </Grid>
            </center>
        </div>
    )
}
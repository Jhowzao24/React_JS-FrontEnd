import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, FormLabel, Paper, Stepper, Grid } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import FirstComp from './Phases_Components/First_Lesson_Theory';
import Smodule from './Phases_Components/Second_Lesson_Theory';
import TerçaFase from './Phases_Components/Third_Lesson_Theory';
import Phase4 from './Phases_Components/Fourth_Lesson_theory';
import Cinco from './Phases_Components/Fifth_Lesson_Theory';
import SextoPh from './Phases_Components/Sixth_Lesson_Theory';
import SetimaFase from './Phases_Components/Seventh_Lesson_Theory';
import EithFase from './Phases_Components/Eigth_Lesson_Theory';
import NonoFase from './Phases_Components/Ninith_Lesson_Theory';
import DecimaFase from './Phases_Components/Thenth_Lesson_Theory';
import ElevenFase from './Phases_Components/Eleventh_Lesson_Theory';
import DozeFase from './Phases_Components/Twoelventh_Lesson_Theory';
import Thirteenth from './Phases_Components/Thirteenth_Lesson_Theory';
import KtorzeF from './Phases_Components/Fourteenth_Lesson_Theory';
import DeciQuintaFase from './Phases_Components/Fifteenth_Lesson_Theory';
import DecimaSestaFase from './Phases_Components/Sixteenth_Lesson_Theory';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function TheoryComponents() {
  return (
    <div style={{margin: '60px', width: '700px', height: '300px'}}>
      <div style={{backgroundColor: 'transparent', width: '700px', height: '90px', paddingTop: '50px'}}>
      <Popup trigger={<Paper style={{backgroundColor: 'Highlight', cursor: 'pointer',
    color: 'gold'}}>Read Before Start</Paper>}>
        <Paper><h3 style={{color: 'Highlight', backgroundColor: 'gold'}}><p>The Theory of Music is hard so...!
          <br/>So! we must not forget that it is the case that we must spending time to study a lot and, 
          this is mustly at this case, it is up to you!
          Please...DON'T GIVE UP</p></h3></Paper>
          <Popup trigger={<Button style={{color: 'Highlight', fontFamily: 'monospace',
        letterSpacing:'5px'}}>One more letter</Button>}>
            <Paper><h5 style={{color: 'Highlight', backgroundColor: 'gold'}}><i>We are here to help you and we together will come at your goals point!
              Keep going ahead</i></h5></Paper>
          </Popup>
      </Popup>
      <Button style={{backgroundColor: 'orange'}}>
        <Link style={{color: 'red'}} to='/App'><ArrowBackIcon style={{fontSize: '30px'}}/></Link>
      </Button>
      </div>
      <div>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper style={{backgroundColor: 'Highlight', color: 'chartreuse', borderRadius: '10px',letterSpacing: '5px'}} variant="outlined">
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>1º Phase</FormLabel>
          <Popup trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
            <Paper style={{width: '500px'}}>
              <FirstComp/>
            </Paper>
            </Popup>
        </Paper></Stepper><hr style={{borderColor: 'Highlight'}}/>
      </div>
      <div>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse',letterSpacing: '5px'}}>
        <FormLabel style={{color: 'white', letterSpacing: '5px'}}>2º Phase</FormLabel>
        <Popup trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
            <Paper>
              <Smodule/>
            </Paper>
          </Popup>
        </Paper>
        </Stepper><hr style={{borderColor: 'Highlight'}}/>
      </div>
      <div>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper style={{backgroundColor: 'Highlight', color: 'chartreuse',letterSpacing: '5px'}} variant="outlined">
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>3º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
            <Paper>
              <TerçaFase/>
            </Paper>
            </Popup>
        </Paper></Stepper><hr style={{borderColor: 'Highlight'}}/>
      </div>
      <div>
        <Stepper style={{paddingLeft : '50px'}}>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse', letterSpacing: '5px'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>4º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
            <Paper style={{cursor: 'pointer'}}>
              <Phase4/>
            </Paper>
            </Popup>
        </Paper></Stepper><hr style={{borderColor: 'Highlight'}}/>
      </div>
      <div>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper style={{backgroundColor: 'Highlight', color: 'chartreuse'}} variant="outlined">
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>5º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
            <Paper style={{cursor: 'pointer'}}>
              <Cinco/>
            </Paper>
            </Popup>
        </Paper></Stepper><hr style={{borderColor: 'Highlight'}}/>
      </div>
      <div>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>6º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <SextoPh/> 
          </Paper>
          </Popup>
        </Paper></Stepper>
        <hr style={{borderColor: 'Highlight'}}/>
      </div>
      <div>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>7º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer', width: '500px'}}>
              <SetimaFase/> 
          </Paper>
          </Popup>
        </Paper></Stepper>
        <hr style={{borderColor: 'Highlight'}}/>
      </div>
      <div style={{float: 'left', paddingLeft: '743px'}}>
        <Grid container spacing={55}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>8º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <EithFase/> 
          </Paper>
          </Popup>
        </Paper></Stepper></Grid>
      </div><br/>
      <div style={{float: 'left', paddingLeft: '743px', paddingTop: '30px'}}>
        <Grid container spacing={55}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>9º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <NonoFase/> 
          </Paper>
          </Popup>
        </Paper></Stepper></Grid>
      </div><br/>
      <div style={{float: 'left', paddingLeft: '743px', paddingTop: '63px'}}>
        <Grid container spacing={55}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>10º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <DecimaFase/> 
          </Paper>
          </Popup>
        </Paper></Stepper></Grid>
      </div><br/>
      <div style={{float: 'left', paddingLeft: '677px', paddingTop: '0px'}}>
        <Grid container spacing={46.5}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>11º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <ElevenFase/> 
          </Paper>
          </Popup>
        </Paper></Stepper></Grid>
      </div><br/>
      <div style={{float: 'left', paddingLeft: '610px'}}>
        <Grid style={{paddingRight: '80px'}} container spacing={38}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>12º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <DozeFase/> 
          </Paper>
          </Popup>
        </Paper></Stepper></Grid>
      </div><br/>
      <div style={{float: 'left', paddingLeft: '580px'}}>
        <Grid style={{paddingRight: '20px'}} container spacing={34}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>13º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <Thirteenth/> 
          </Paper>
          </Popup>
        </Paper></Stepper></Grid>
      </div><br/>
      <div style={{float: 'left', paddingLeft: '550px'}}>
        <Grid style={{paddingRight: '40px'}} container spacing={30}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>14º Phase</FormLabel>
          <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <KtorzeF/> 
          </Paper>
          </Popup>
        </Paper></Stepper></Grid>
      </div><br/>
      <div style={{float: 'left', paddingLeft: '1180px'}}>
        <Grid container spacing={81.2}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
        <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <DeciQuintaFase/> 
          </Paper>
          </Popup>
          <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>15º Phase</FormLabel>
        </Paper></Stepper></Grid>
      </div><br/>
      <div style={{float: 'left', paddingLeft: '1150px'}}>
        <Grid style={{paddingRight: '60px'}} container spacing={77.5}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
        <Popup className='pop' trigger={<Button style={{color: 'ButtonHighlight',
        borderStyle: 'initial', borderColor: 'Scrollbar', borderWidth: '5px',
        backgroundColor: 'cadetblue'}}><ExpandCircleDownIcon/></Button>}>
          <Paper style={{cursor: 'pointer'}}>
              <DecimaSestaFase/> 
          </Paper>
          </Popup>
          <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>16º Phase</FormLabel>
        </Paper></Stepper></Grid>
      </div><br/>
    </div>
  )
}

export default TheoryComponents;
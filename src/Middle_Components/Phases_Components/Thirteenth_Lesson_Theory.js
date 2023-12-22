import { Grid, Tooltip } from '@mui/material';
import React from 'react';
import QuizzTreze from '../Avaliations_Files/TeoryAvaliationsQuizz/QuizzPhaseThirteen';

export default function Thirteenth(){
    return(
        <div style={{margin: '-40px', backgroundColor: 'deepskyblue', borderRadius: '20px', width: '600px', height: '1900px'}}>
            <center style={{margin: '20px'}}>
                <h1>Early rhythms</h1><hr/>
                <h2>The early rhythms of a music, that is located only at the begin of the musical score!
                    It can be classificated as Tético, Anacrusico, Acefalo
                </h2>
                <hr/>
                <h4>First of all,we will start talking about the Tético rhythmic</h4>
                <h5>For knowing it better, the Tético rhythm is all the starter note in the compasso, where there is a dot, you must to put the mouse under, take notice at the example below</h5>
                <img style={{width: '550px', height: '120px'}} src='https://th.bing.com/th/id/R.5b86d3df004ab4723721aa041b5a367f?rik=KS3cWf%2fGQ45Xbg&riu=http%3a%2f%2fwww.diapasonblog.it%2fwp-content%2fuploads%2f2014%2f10%2fTetico-01.png&ehk=UEVwxNUhfp5nyXcGS%2bggkuVDhc2bnO7FwCAl5pIijrU%3d&risl=&pid=ImgRaw&r=0' alt='teticoritmo'/>
                <Grid style={{paddingLeft: '215px'}} container spacing={9}>
                    <Tooltip title='This isthe skeptic rhythm, the first note of the compasso, ever that you see a compasso that is completed with the first time of the compasso, you ready must to know, this is the skeptic rhythm compasso'>
                        <p style={{fontFamily: 'fantasy'}}>T</p>
                    </Tooltip>
                </Grid>
                <Grid style={{paddingLeft: '370px'}} container spacing={6.4}>
                    <Tooltip title='This isthe skeptic rhythm, the first note of the compasso, ever that you see a compasso that is completed with the first time of the compasso, you ready must to know, this is the skeptic rhythm compasso'>
                        <p style={{fontFamily: 'fantasy'}}>T</p>
                    </Tooltip>
                </Grid>
            </center>
            <hr/>
            <center style={{margin: '20px', backgroundColor: 'gold'}}>
                <h4>At the Second time we will get the anacrusico rhythm</h4>
                <h5>This rhythm is based that the first compasso ever will have a note before this compasso, look the image below:</h5>
                <img style={{width: '400px', height: '120px'}} src='https://th.bing.com/th/id/OIP.njeLpNS7ZRod8Wxs9yx7dAHaCo?pid=ImgDet&rs=1' alt='anacrusico'/>
                <h6><strong>Notice that, the Anacruse is one note before the next compasso, and it means that the last note is not of the next compasso. It is like as this note was be in the zero compasso! By this motive that is not spelled pauses before the anacruse note to complete the compasso</strong></h6>
                <hr/>
                <h6>Considering it, the anacrusico rhythm is considered when this earlier notes <strong>cover until the half</strong> of a binary compasso or a quaternary compasso, or when cover both until two-thirds of a ternary compasso</h6>
                <br/>
                <h5>Take any examples of the Anacrusico in the rhythms below:</h5>
                <h5>Compasso Binary</h5>
                <br/>
                <Grid style={{float: 'left', paddingLeft: '50px'}} container spacing={5}>
                    <img style={{width: '200px', height: '100px'}} src='https://th.bing.com/th/id/R.4e7db11bf86e726324651d55f52e535b?rik=evZBAYzmPmou%2fw&riu=http%3a%2f%2fwww.fundaciongrillos.org%2fcemumisiones%2fwp-content%2fuploads%2f2020%2f06%2fanacrusa-768x559.jpg&ehk=2G2UaFGhmpbqeAZbrdl%2fNZPg9iS0gC%2fz787GsKdZEU0%3d&risl=&pid=ImgRaw&r=0' alt='binario'/>
                </Grid>
                <ul>
                    <h5>Compasso Ternary</h5>
                    <Grid style={{paddingLeft: '300px'}} container spacing={1}>
                        <img style={{width: '200px', height: '100px'}} src='https://luiseduardolopez.es/wp-content/uploads/2016/10/anacrusa-ejemplo.jpg' alt='binario'/>
                    </Grid>
                </ul>
                <br/>
                <h5>Compasso Quaternary</h5>
                <br/>
                <Grid container spacing={1}>
                    <img style={{width: '300px', height: '100px'}} src='https://www.pianogratis.com/imagenes/anacrusa1.gif' alt='binario'/>
                </Grid>
            </center>
            <br/>
            <center>
                <h3>Acefalo</h3>
                <hr/>
                <h3>This is a rhythm started by a contretemps, it is, when the begin of the first compasso is occuped by pause, be it wrote or not wrote!</h3>
                <hr/>
                <img style={{width: '500px', height: '120px'}} src='https://th.bing.com/th/id/OIP.V-ZWcCUEfX58T3GjS1vErAHaCw?pid=ImgDet&rs=1' alt='acefalo'/>
                <h5>You can repair that the score start with a pause, and there is still a score with a acefalo rhythm that start with no pause, and this score start with only a note!</h5>
            </center>
            <QuizzTreze/>
        </div>
    )
}
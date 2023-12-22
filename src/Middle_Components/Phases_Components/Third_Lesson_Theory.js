import { CardMedia, Card, Fab, Grid, Paper, Stack, ListItem, Divider, Alert, Button, Box } from '@mui/material';
import React from 'react';
import Popup from 'reactjs-popup';
import QuizzThreePhase from '../Avaliations_Files/TeoryAvaliationsQuizz/QuizzPhaseThree';

export default function TerçaFase(){
        const style = {
            position: 'absolute',
            top: '100px',
            left: '100px',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height: 200,
            bgcolor: 'midnightblue',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };
        return(
            <CardMedia style={{backgroundColor: 'midnightblue', width: '1000px', height: '500px'}}>
                <img alt='music' style={{width:'100px', height: '100px', borderRadius: '30px',
                    paddingRight: '10px', backgroundColor: 'yellow', paddingLeft: '10px'}}
                     src='https://th.bing.com/th/id/OIP.c_yCvxMR4I_4jYtlSwTH1AHaHa?pid=ImgDet&rs=1'/>
                <h1 style={{float: 'right', paddingRight: '50px', color: 'yellow'}}>Phase 3</h1>
                <br/><hr/>
                <Card style={{backgroundColor: 'gold', height: '200px'}}>
                    <center><Paper>Endecagram</Paper></center>
                    <h5>On case we wanna to write by example, a note Dó, sounding at the medium region, lets see it in each scale</h5>
                    <Grid style={{paddingLeft: '70px'}}>
                        <Popup trigger={<Fab>Sun</Fab>}>
                            <Card style={{width: '900px', height: '500px'}} >
                                <h3>And now... about the Endecagram,</h3>
                                <hr/>
                            <Stack direction='row' spacing={5}>
                                <ListItem>And now... about the Endecagram,</ListItem>
                                <ListItem style={{width: '500px'}}><li>The clave is a signal that determine the  wrote note at your referencial line</li></ListItem>
                                <ListItem>So the clave determine the height of the sound and the note</ListItem>
                            </Stack>
                            <h4>The Dó 3nd note at a three different claves, on different positions, but sounds the same sound</h4>
                            <Stack direction='row' spacing={5}>
                                <ListItem><img style={{width: '200px', height: '200px', borderRadius: '50px'}} src='https://th.bing.com/th/id/R.b3e733934ac1bb403b62dcce5a4759d9?rik=azLGIcZUhlEzzg&pid=ImgRaw&r=0' alt='solclave'/></ListItem>
                            </Stack>
                            </Card>
                        </Popup>
                    </Grid>
                    <Grid style={{float: 'right', paddingLeft: '410px'}} container spacing={7}>
                        <Popup trigger={<Fab>Dó</Fab>}>
                        <Card style={{width: '900px', height: '500px'}} >
                                <h3>And now... about the Endecagram,</h3>
                                <hr/>
                            <Stack direction='row' spacing={5}>
                                <ListItem>And now... about the Endecagram,</ListItem>
                                <ListItem style={{width: '500px'}}><li>The clave is a signal that determine the  wrote note at your referencial line</li></ListItem>
                                <ListItem>So the clave determine the height of the sound and the note</ListItem>
                            </Stack>
                            <h4>The Dó 3nd note at a three different claves, on different positions, but sounds the same sound</h4>
                            <Stack direction='row' spacing={5}>
                                <ListItem><img style={{width: '270px', height: '200px', borderRadius: '50px'}} src='https://th.bing.com/th/id/OIP.eJq4u_C0QZP891dVUEIb1wHaDt?pid=ImgDet&rs=1' alt='doclave'/></ListItem>
                            </Stack>
                            </Card>
                        </Popup>
                    </Grid>
                    <Grid style={{float: 'right', paddingLeft: '700px'}} container spacing={7}>
                        <Popup trigger={<Fab>Fá</Fab>}>
                        <Card style={{width: '900px', height: '500px'}} >
                                <h3>And now... about the Endecagram,</h3>
                                <hr/>
                            <Stack direction='row' spacing={5}>
                                <ListItem>And now... about the Endecagram,</ListItem>
                                <ListItem style={{width: '500px'}}><li>The clave is a signal that determine the  wrote note at your referencial line</li></ListItem>
                                <ListItem>So the clave determine the height of the sound and the note</ListItem>
                            </Stack>
                            <h4>The Dó 3nd note at a three different claves, on different positions, but sounds the same sound</h4>
                            <Stack direction='row' spacing={5}>
                                <ListItem><img style={{width: '200px', height: '200px', borderRadius: '50px'}} src='https://th.bing.com/th/id/R.418b702b7049cbc807c21ac397a519f9?rik=zOvnCPyCLpoqvQ&riu=http%3a%2f%2fwww.escribircanciones.com.ar%2fimages%2fteoriamusical%2fClavesMusicales%2fClave-de-fa-3ra-en-el-pentagrama.png&ehk=U6kgtvquE9zZnLeE3F1%2bZncuIGRVhbo2aSO78lhuFBE%3d&risl=&pid=ImgRaw&r=0' alt='faclave'/></ListItem>
                            </Stack>
                            </Card>
                        </Popup>
                    </Grid>
                    <Divider/>
                    <hr/><br/>
                    <hr style={{borderColor: 'midnightblue'}}/>
                </Card>
                <div style={{paddingLeft: '300px'}}>
                    <Popup placement='top' trigger={<Button style={{backgroundColor: 'cyan', color: 'midnightblue', fontFamily: 'fantasy'}}>Quizz Third Phase</Button>}>
                        <Box sx={style}>
                            <Alert style={{backgroundColor: 'cyan'}}>
                                <QuizzThreePhase/>
                            </Alert>
                        </Box>
                    </Popup>
                </div>
            </CardMedia>
        )
}
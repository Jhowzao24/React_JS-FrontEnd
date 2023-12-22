import { Button, ButtonBase, Divider, Grid, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import QuizzDoze from '../Avaliations_Files/TeoryAvaliationsQuizz/QuizzPhaseTwoelve';

export default function DozeFase(){
        const [Contente, setContente] = useState([])
        const handleAdMoreCont = () => {
            const newContente = ['Regular']
            setContente([] +newContente);
            alert("Here is the Regular sincopation located; Aqui se encontra a sincopa regular localizada")
        }
        const [IrContent, setIrContente] = useState([])
        const handleIrreguAdd = () => {
            const newIrContente = ['Irregular']
            setIrContente([] +newIrContente);
        }
        const [Acentuado, setAcentuado] = useState([])
        const handleAcentuado = () => {
            const newAcentuado = ['>']
            setAcentuado([] +newAcentuado);
        }
        return(
            <div style={{width: '700px', height: '1500px', backgroundColor: 'darkred', margin: '-40px', color: 'cyan'}}>
                <h1 style={{textAlign: 'center'}}>Syncopation</h1>
                <Grid style={{margin: '50px'}}>
                    <h6>The syncopetion happen when a sound is articulated at the weak time, or the weak part of the time and prolong itself under the strong time or strong part following. The strong accent or half strong that must to appear is suprimed, this not appear</h6>
                    <h6>Look the example below:
                        <ul>
                            <p>At this way, on having sincopation, the weak time keep under the strong part time on this sincopated note.</p>
                            <img style={{width: '600px', height: '70px'}} src='https://2.bp.blogspot.com/-ef4KHH1FHv8/U8wFTLr3BmI/AAAAAAAAAXc/EuF-UpZZgyg/s1600/S%C3%ADncopa.png' alt='sincopation'/>
                            <Grid style={{paddingLeft: '520px'}} container spacing={5}>
                                <p style={{color: 'black'}}>{Contente}</p>
                            </Grid>
                            <Grid style={{paddingLeft: '240px'}} container spacing={5}>
                                <p style={{color: 'black'}}>{Contente}</p>
                            </Grid>
                            <div style={{float: 'left', width: '200px', height: '200px', backgroundColor: 'blue', paddingTop: '20px'}}>
                                <h3>
                                    Regular Sincopa:
                                    <ul>
                                        <div style={{backgroundColor: 'black'}}>
                                            <p>This is formed by notes that have the same duration; Click on this button below to see on where this sincopation is located at the under pentagram</p>
                                            <ButtonBase onClick={handleAdMoreCont} style={{backgroundColor: 'Highlight', color: 'gold'}}>Regular Sincopa located</ButtonBase>
                                        </div>
                                    </ul>
                                </h3>
                            </div>
                            <Grid style={{paddingLeft: '120px'}} container spacing={4.6}>
                                <p style={{color: 'black'}}>{IrContent}</p>
                            </Grid>
                            <Grid style={{paddingLeft: '340px'}} container spacing={4.6}>
                                <p style={{color: 'black'}}>{IrContent}</p>
                            </Grid>
                            <Grid style={{float: 'left', paddingTop: '10px', paddingLeft: '500px'}} container spacing={26}>
                                <div style={{width: '210px', height: '200px', backgroundColor: 'blue'}}>
                                <h3>Irregular sincopation:
                                    <ul>
                                        <div style={{backgroundColor: 'black'}}>
                                            <p>This is formed by notes that have differents durations; Click on the button below to see on where is the irregular sincopa is located</p>
                                            <ButtonBase style={{backgroundColor: 'Highlight', color: 'gold'}} onClick={handleIrreguAdd}>Irregular Sincopa located</ButtonBase> 
                                        </div>
                                    </ul>
                                </h3>
                                </div>
                            </Grid>
                        </ul>
                    </h6>
                </Grid><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Divider style={{borderColor: 'Highlight'}}/>
                <Grid style={{margin: '50px'}}>
                    <h6>The musical interpretation dont order that increase or decrease the sounds intensity according to the strong metric accent or weak metric accent of the compassio. The music naturaly does it by your natural dinamic and of musical discurse</h6>
                    <Divider style={{borderColor: 'cyan'}}/>
                    <h6>But, at case of sincopa, there is musicals styles(by example at the lathyn popular music, at jazz, etc), that make an major accentuation on this sincopated note, creating with this, an a differentiated rythm</h6>
                    <Divider style={{borderColor: 'cyan'}}/>
                    <h6>It can happen still that the composer wants this accentuation more strongest over the sincopa. On this case, he puts a signal of accent on this note(resource very present on diverses instruments methods), As to see at the example below:</h6>
                    <img style={{width: '600px', height: '115px'}} src='https://d2nwkt1g6n1fev.cloudfront.net/skydocu/wp-content/uploads/content/logicpro/images/logicpro-es-S0695_scoSyncopationUL3.png' alt='sincopapresente'/>
                </Grid>
                <Grid style={{paddingLeft: '200px'}} container spacing={5}>
                    <Tooltip title='This is the Sincopas accentuated, click and you will see it where theyis found'>
                    <Button style={{backgroundColor: 'Highlight', color: 'cyan'}} onClick={handleAcentuado}>Accentuations; Click to see it</Button>
                    </Tooltip>
                </Grid>
                <Grid style={{paddingLeft: '285px'}} container spacing={15.5}>
                    <p style={{color: 'black'}}>{Acentuado}</p>
                </Grid>
                <Grid style={{paddingLeft: '340px'}} container spacing={6.5}>
                    <p style={{color: 'black'}}>{Acentuado}</p>
                </Grid>
                <Grid style={{paddingLeft: '530px'}} container spacing={6.5}>
                    <p style={{color: 'black'}}>{Acentuado}</p>
                </Grid>
                <Grid style={{paddingLeft: '620px'}} container spacing={6.5}>
                    <p style={{color: 'black'}}>{Acentuado}</p>
                </Grid>
                <Grid style={{paddingLeft: '240px'}} container spacing={11}>
                    <p style={{color: 'black'}}>{Acentuado}</p>
                </Grid>
                <Grid style={{paddingLeft: '340px'}} container spacing={6.5}>
                    <p style={{color: 'black'}}>{Acentuado}</p>
                </Grid>
                <Grid style={{paddingLeft: '540px'}} container spacing={6.5}>
                    <p style={{color: 'black'}}>{Acentuado}</p>
                </Grid>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><Divider style={{borderColor: 'dodgerblue'}}/>
                <center><h1>Contretemps</h1></center>
                <br/>
                <h3 style={{margin: '20px'}}>The contretemps verify itself when there are executed notes in a weak time or weak part of the time,keeping the strong times or strong parts of the times fulled by pauses!</h3>
                <h4>And now, you will have a litle look by the <i>REGULAR/IRREGULAR - Contretemps</i></h4>
                <img style={{width: '600px', height: '150px'}} src='https://4.bp.blogspot.com/-sf9kmXjczf4/VCNre7RG_FI/AAAAAAAAEQM/u7r08YdLpPk/s16000/1.png' alt='contretemps'/>
                <Grid style={{paddingLeft: '300px'}} container spacing={15}>
                    <Tooltip>
                        <h5>Regular</h5>
                    </Tooltip>
                </Grid>
                <Grid style={{paddingLeft: '500px'}} container spacing={8}>
                    <Tooltip>
                        <h5>Irregular</h5>
                    </Tooltip>
                </Grid>
                <br/><br/><br/>
                <QuizzDoze/>
            </div>
        )
    }
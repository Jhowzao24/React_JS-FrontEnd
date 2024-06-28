/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {Button} from 'antd';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import DeckIcon from '@mui/icons-material/Deck';
import ContactsIcon from '@mui/icons-material/Contacts';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import Contacts from './Contacts';
import TheoryComponents from './Component_Theory';
import { Grid, Card } from '@mui/material';
import PraticeComponents from './Component_Pratice';
import AtualizarPagina from './Pratice_Files/FilesPratices/UpdateLayout';
import { motion } from 'framer-motion';
import Api_Interface from './CRUDEnterDatas.tsx';

/*href='http://127.0.0.1:8000/Urls/Register_Datas/'*/

export default function RoteadorReact(){
    return(
        <div>
            <BrowserRouter>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1.5}}>
                <div>
                    <Grid container spacing={15}>
                        <center>
                            <Grid style={{paddingRight: '50px', float: 'right'}} container spacing={5}>
                            <div>
                            <div style={{borderStyle: 'ridge', borderColor: 'Highlight',
                            borderRadius:'30px', position: 'sticky', margin: '3px'}}>
                                <div style={{float: 'right', paddingRight: '0px'}}>
                                    <Button type='primary' style={{borderStyle: 'ridge', borderColor: 'cyan',
                                        borderWidth: '1px', color: 'white', margin: '3px', boxShadow: '0 0 5px 3px'}}><DeckIcon/>
                                        <NavLink style={{fontFamily: 'fantasy', fontSize: '20px', paddingRight: '50px', textShadow: 'revert'
                                        }} rel="noreferrer noopener" to='/CRUDEnterDatas'>Register it selves</NavLink>
                                    </Button>
                                    <Button type='primary' style={{borderStyle: 'ridge', borderColor: 'cyan',
                                    borderWidth: '1px', margin: '3px', color: 'white', boxShadow: '0 0 5px 3px'}}><ContactsIcon/>
                                        <NavLink style={{fontFamily: 'fantasy', fontSize: '20px', paddingLeft: '50px',
                                     paddingRight: '50px', color: 'white'}} to='/Contacts'>Contact</NavLink>
                                    </Button>
                                    <Button type='primary' style={{borderStyle: 'ridge', borderColor: 'cyan',
                                            borderWidth: '1px', margin: '3px', color: 'white', boxShadow: '0 0 5px 3px'}}><DesignServicesIcon/>
                                        <NavLink style={{fontFamily: 'fantasy', fontSize: '20px', paddingLeft: '50px',
                                         paddingRight: '50px', color: 'white'}} to='/Component_Pratice'>Pratice</NavLink>
                                    </Button>
                                    <Button type='primary' style={{borderStyle: 'ridge', borderColor: 'cyan',
                                            borderWidth: '1px', margin: '3px', color: 'white', boxShadow: '0 0 5px 3px'}}><BookOnlineIcon/>
                                        <NavLink style={{fontFamily: 'fantasy', fontSize: '20px', color: 'white'}} to='/Component_Theory'>Theory</NavLink>
                                    </Button>
                                </div>
                            </div></div></Grid></center></Grid>
                            <Grid container spacing={15} style={{paddingLeft: '600px'}}>
                            <AtualizarPagina/>
                            </Grid>
                    </div></motion.div><br/>
                <Grid container spacing={15} style={{float: 'left', paddingTop: '150px'}}>
                    <Card style={{backgroundColor: 'blue', opacity: 0.8, borderRadius: '70px', width: '870px'}}>
                        <div>
                            <Routes>
                                <Route exact path="/CRUDEnterDatas" element={<Api_Interface/>}/>
                            </Routes>
                        </div>
                        <div>
                            <Routes>
                                <Route exact path="/Contacts" element={<Contacts/>}/>
                            </Routes>
                        </div>
                        <div>
                            <Routes>
                                <Route exact path="/Component_Pratice" element={<PraticeComponents/>}/>
                            </Routes>
                        </div>
                        <div>
                            <Routes>
                                <Route exact path="/Component_Theory" element={<TheoryComponents/>}/>
                            </Routes>
                        </div>
                    </Card>
                </Grid>
            </BrowserRouter>
        </div>
    )
}
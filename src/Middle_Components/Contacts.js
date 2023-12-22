import React from 'react';
import { Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Contacts() {
  return (
    <div style={{width: '500px 300px'}}>
      <Card style={{color: 'Highlight', opacity: 0.6}}>
        <h4><EmojiPeopleSharpIcon style={{fontSize: '60px'}}/><i>Jhonnathan Wesley Lopes</i></h4>
        <h4><WhatsAppIcon style={{fontSize: '60px'}}/>---------(19) 98180-8498</h4>
        <h4><MailOutlineIcon style={{fontSize: '60px'}}/>---Jhonny.lopes21@outlook.com</h4>
      </Card>
      <Button style={{backgroundColor: 'midnightblue'}}>
        <Link style={{color: 'orange'}} to='/App'><ArrowBackIcon/></Link>
      </Button>
    </div>
  )
}

export default Contacts;
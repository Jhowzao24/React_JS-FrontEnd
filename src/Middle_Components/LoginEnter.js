import {Button, Divider, Input} from 'antd';
import React, { Component } from 'react';
import { Card, FormLabel } from '@material-ui/core';
import {Grid} from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import RoteadorReact from './Routers';
import { Toaster, toast } from 'react-hot-toast';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: '',
      question2: '',
      loggedIn: false,
      open: false,
    };
  };

  ShowAccordion = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  handleUsernameChange = (event) => {
    this.setState({ question1: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ question2: event.target.value });
  };

  submitToast = () => {
    toast.success("Acessing...");
  }

  handleLogin = () => {
    const { question1, question2 } = this.state;
    if (question1 === 'som' && question2 === 'musica') {
      this.setState({ loggedIn: true });
      toast.success('Acessing...');
    } else {
      toast.error('Login Failed..., Wrong Datas..., Try it again!');
    }
  };

  render() {
    const { question1, question2, loggedIn } = this.state;
    const styles = {
        container: {
            borderRadius: '55px',
            backgroundColor: 'dodgerblue',
            borderColor: 'cyan',
            borderStyle: 'ridge',
            borderWidth: '1px',
            opacity: '0.8',
            width: '330px',
            heigth: '150px'
        },
        title: {
          fontSize: '20px',
          fontFamily: 'serif',
          float: 'right',
          color: 'white'
        },
        imagem: {
            width: '30px', 
            borderRadius: '55px',
            borderColor: 'cyan',
            borderStyle: 'ridge',
            padding: '10px',
            borderWidth: '1px'
        },
        LogButton: {
          width: '300px',
          backgroundColor: 'yellow'
        }
      };

    return (
      <div>
        <Grid container spacing={15} style={{float: 'left'}}>
              <Accordion style={styles.container}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: 'blue'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                  <Typography>
                    <img 
                    style={styles.imagem}
                    src='https://thumbs.dreamstime.com/b/festive-alphabet-colorful-confetti-isolated-white-background-question-mark-d-rendering-festive-alphabet-colorful-122629744.jpg'
                    alt='interrogação'
                    />
                    <h1 style={styles.title}>Lets start</h1>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                  <Card style={{width: '300px', backgroundColor: 'transparent', fontFamily: 'serif', opacity: '1.5'}}>
                    <center>
                      <FormLabel style={{color: 'white', fontFamily: 'serif', fontSize: '20px'}}>What is the Raw Music Material?</FormLabel><br/>
                      <Input style={{color: 'blue', fontFamily: 'serif', fontSize: '20px'}} type="text" placeholder="Question-1" value={question1} onChange={this.handleUsernameChange} /><br/>
                      <FormLabel style={{color: 'white', fontFamily: 'serif', fontSize: '20px'}}>What is the art of sound?</FormLabel><br/>
                      <Input style={{color: 'blue', fontFamily: 'serif', fontSize: '20px'}} type="text" placeholder="Question-2" value={question2} onChange={this.handlePasswordChange} /><br/>
                      <Divider/>
                      <Button style={styles.LogButton} onClick={this.handleLogin}>Access</Button><br/>
                    </center>
                  </Card>
                </Typography>
              </AccordionDetails>
            </Accordion>
        </Grid>
        <br/><Divider/><br/>
        {
            loggedIn && <Grid style={{paddingTop: '150px', float: 'left'}}><RoteadorReact/></Grid>
        }
        <Toaster/>
      </div>
    );
  }
}

export default Login;
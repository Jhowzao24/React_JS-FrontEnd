
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Divider, Input } from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import  { motion } from 'framer-motion';
import './ComponentesCSS.css';

interface UserData {
  id: number;
  Nome: string;
  Sobrenome: string;
  WhatsApp: string;
  InstrumentoPref: string;
  Localidade: string;
  // Adicione outras propriedades conforme necessário
}

const Api_Interface: React.FC = () => {
  const style = {
    containerDad: {
      backgroundColor: 'purple',
      color: 'cyan',
      width: 630,
      height: 700,
      alignContent: 'center',
      paddingTop: '3px',
      borderWidth: '5px',
      borderColor: 'cyan',
      borderStyle: 'outset',
      fontFamily: 'serif',
      margin: '100px',
      boxShadow: '0 0 30px 13px',
    }
  }
  const apiUrl = 'http://127.0.0.1:8000/Urls/ViewsStudy/'; // Substitua pelo URL real da sua API
  const [userData, setUserData] = useState<UserData[]>([]);
  const dados = userData;
  const ShowInfo = () => {
    toast.update(`${dados}`);
  }
  const [createInput, setCreateInput] = useState<{ 
    Nome: string; 
    Sobrenome: string; 
    WhatsApp: string; 
    InstrumentoPref: string; 
    Localidade: string }>
    ({
    Nome: '',
    Sobrenome: '',
    WhatsApp: '',
    InstrumentoPref: '',
    Localidade: ''
    // Adicione outros campos conforme necessário
  });

  const fetchData = async () => {
    try {
      const response = await axios.get<UserData[]>(apiUrl);
      setUserData(response.data);
      toast.update("Acessando áre de cadastramento...!");
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.warning("Erro ao coletar os dados ...");
    }
  };

  
  const createData = async () => {
    try {
      await axios.post(apiUrl, createInput);
      fetchData();
      // Limpar os campos do formulário após a criação bem-sucedida
      setCreateInput({ Nome: '', Sobrenome: '', WhatsApp: '', InstrumentoPref: '', Localidade: '' /* Adicione outros campos conforme necessário */ });
      toast.success("Dados inseridos com sucesso!!")
    } catch (error) {
      toast.warning("Erro ao coletar os dados ...");
      console.error('Error creating data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={style.containerDad}>
      <div>
        <motion.div
        initial={{rotate: -180}}
        animate={{rotate: 0}}
        transition={{ duration: 1.8 }}>
          <h2>Create</h2>
        </motion.div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createData();
          }}
        >
        <motion.div 
        initial={{ scale: -0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        >
        <div>
          <label htmlFor="nome">Name:</label>
          <Input
          type="text"
          id="nomeInput"
          value={createInput.Nome}
          onChange={(e) => setCreateInput({ ...createInput, Nome: e.target.value })}
          required
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            backgroundColor: 'blueviolet',
            letterSpacing: '3px'
          }}
          placeholder='First Name!'
          />
        </div>
        <br/>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>

        <div>
          <label htmlFor="sobrenome">Lastname:</label>
          <Input
          type="text"
          id="sobrenomeInput"
          value={createInput.Sobrenome}
          onChange={(e) => setCreateInput({ ...createInput, Sobrenome: e.target.value })}
          required
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            backgroundColor: 'blueviolet',
            letterSpacing: '3px'
          }}
          placeholder='LastName'
          />
        </div>
        <br/>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>

        <div>
          <label htmlFor="celularInput">WhatsApp:</label>
          <Input
          type="text"
          id="celularInput"
          value={createInput.WhatsApp}
          onChange={(e) => setCreateInput({ ...createInput, WhatsApp: e.target.value })}
          required
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            backgroundColor: 'blueviolet',
            letterSpacing: '3px'
          }}
          placeholder='Cellphonumber'
          />
        </div>
        <br/>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>

        <div>
          <label htmlFor="descricaoinput">Instrument Prefered:</label>
          <Input
          type="text"
          id="descricaoinput"
          value={createInput.InstrumentoPref}
          onChange={(e) => setCreateInput({ ...createInput, InstrumentoPref: e.target.value})}
          required
          placeholder='Own description'
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            backgroundColor: 'blueviolet',
            letterSpacing: '3px'
          }}
          />
        </div>
        <br/>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>

        <div>
          <label htmlFor="local">Place:</label>
          <Input
          type="text"
          id="local"
          value={createInput.Localidade}
          onChange={(e) => setCreateInput({ ...createInput, Localidade: e.target.value})}
          required
          placeholder='Locate'
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            backgroundColor: 'blueviolet',
            letterSpacing: '3px'
          }}
          />
        </div>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>
        <Button style={{backgroundColor: 'cyan', color: 'blue', width: '200px', fontFamily: 'serif', fontSize: '15px', boxShadow: '0 0 3px 3px'}} onClick={createData}>Create</Button>
        <br/>
        <br/>
        <br/>
        <Button disabled={true} style={{backgroundColor: 'ButtonFace'}} onClick={ShowInfo}>!</Button>
        <div className='ArrowCuston'>
        <Link to='./App'>
            <Button style={{backgroundColor: 'orangered', color: 'white', float: 'left'}}><ArrowBackIcon/></Button>
        </Link>
        <ToastContainer/>
        </div>
        </motion.div>
        </form><br/><br/>
      </div>
    </div>
  )
};

export default Api_Interface;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Divider, Input } from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface UserData {
  id: number;
  Nome: string;
  Sobrenome: string;
  WhatsApp: string;
  InstrumentoPref: string;
  Localidade: string;
  // Adicione outras propriedades conforme necessário
}

const YourComponent: React.FC = () => {
  const apiUrl = 'http://127.0.0.1:8000/Urls/ViewsStudy/'; // Substitua pelo URL real da sua API
  const [userData, setUserData] = useState<UserData[]>([]);
  const dados = userData;
  const [updateInput, setUpdateInput] = useState<{
     Nome: string;
     Sobrenome: string;
     WhatsApp: string;
     InstrumentoPref: string;
     Localidade: string;
  }>({
    Nome: '',
    Sobrenome: '',
    WhatsApp: '',
    InstrumentoPref: '',
    Localidade: ''
  });  
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
      alert("Dados coletados com sucesso!!")
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Erro ao coletar os dados!!');
    }
  };

  
  const createData = async () => {
    try {
      await axios.post(apiUrl, createInput);
      fetchData();
      // Limpar os campos do formulário após a criação bem-sucedida
      setCreateInput({ Nome: '', Sobrenome: '', WhatsApp: '', InstrumentoPref: '', Localidade: '' /* Adicione outros campos conforme necessário */ });
      alert('Dados inseridos com sucesso!!');
    } catch (error) {
      alert('Erro ao inserir os dados!!')
      console.error('Error creating data:', error);
    }
  };

  const updateData = async () => {
    try {
      await axios.put(apiUrl, { newData: updateInput });
      fetchData();
      setUpdateInput({ Nome: '', Sobrenome: '', WhatsApp: '', InstrumentoPref: '', Localidade: '' });
      alert(dados);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const deleteData = async () => {
    try {
      await axios.delete(apiUrl);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{backgroundColor: 'highlight', color: 'cyan', width: '650px', height: '800px', textAlign: 'center', paddingTop: '50px'}}>

      <div>
        <h2>Create</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createData();
          }}
        >
      <div>
        <label htmlFor="nome">Nome:</label>
        <Input
          type="text"
          id="nomeInput"
          value={createInput.Nome}
          onChange={(e) => setCreateInput({ ...createInput, Nome: e.target.value })}
          required
        />
      </div>
      <br/>
      <Divider style={{borderColor: 'cyan'}}/>
      <br/>

      <div>
        <label htmlFor="sobrenome">Sobrenome:</label>
        <Input
          type="text"
          id="sobrenomeInput"
          value={createInput.Sobrenome}
          onChange={(e) => setCreateInput({ ...createInput, Sobrenome: e.target.value })}
          required
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
        />
      </div>
      <br/>
      <Divider style={{borderColor: 'cyan'}}/>
      <br/>

      <div>
        <label htmlFor="profissaoinput">Place:</label>
        <Input
          type="text"
          id="profissaoinput"
          value={createInput.Localidade}
          onChange={(e) => setCreateInput({ ...createInput, Localidade: e.target.value})}
          required
          />
        </div>
        <br/>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>
        <br/>
        <Button style={{backgroundColor: 'blue', color: 'white'}} onClick={createData}>Create</Button>
        <br/>
        <Button style={{backgroundColor: 'green', color: 'white'}} onClick={updateData}>Update Datas</Button>
        <br/>
        <Button style={{backgroundColor: 'red', color: 'white'}} onClick={deleteData}>Update Datas</Button>
        <br/>
        <Link to='./App'>
            <Button style={{backgroundColor: 'orangered', color: 'white'}}><ArrowBackIcon/></Button>
        </Link>
      </form>
    </div>
    </div>
  )
};

export default YourComponent;

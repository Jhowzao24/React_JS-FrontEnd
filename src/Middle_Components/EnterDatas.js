import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Alert, Input } from '@mui/material';
/*import Popup from 'reactjs-popup';*/
import { Card } from 'antd';

const EnterComponent = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ FullName: '', Age: '', ResidencePhone: '', WhatsApp: '',
  Adress: '', SelfDescription: '', InstrumentChoice: ''});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.FullName]: e.target.value });
    setFormData({ ...formData, [e.target.Age]: e.target.value });
    setFormData({ ...formData, [e.target.ResidencePhone]: e.target.value });
    setFormData({ ...formData, [e.target.Adress]: e.target.value });
    setFormData({ ...formData, [e.target.SelfDescription]: e.target.value });
    setFormData({ ...formData, [e.target.InstrumentChoice]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envie os dados para a API Django
      const response = await fetch('http://127.0.0.1:8000/Urls/Register_Datas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Atualize a lista de dados após a inserção bem-sucedida
        const newData = [...data, formData];
        setData(newData);
        }
     } catch (error) {
      Alert('Erro ao enviar dados para a API:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/Urls/Register_Datas/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);  // Executa apenas uma vez ao montar o componente

  return (
    <div>
      <Card style={{width: '400px', height: '590px', color: 'WindowFrame', backgroundColor: 'Highlight'}}>
        <h3 style={{color: 'Window'}}>Datas Enter</h3>
        <form>
          <div>
            <label>Name:</label>
          </div>
          <Input
            type="text"
            name="nome"
            value={formData.FullName}
            onChange={handleInputChange}
            style={{color: 'cyan'}}
          />
          <br />
          <div>
            <label>Age:</label>
          </div>
          <Input
            type="number"
            name="outroCampo"
            value={formData.Age}
            onChange={handleInputChange}
            style={{color: 'cyan'}}
          />
          <br />
          <div>
            <label>Residence Phone:</label>
          </div>
          <Input
            type="text"
            name="outroCampo"
            value={formData.ResidencePhone}
            onChange={handleInputChange}
            style={{color: 'cyan'}}
          />
          <br/>
          <div>
            <label>WhatsApp:</label>
          </div>
          <Input
            type="text"
            name="outroCampo"
            value={formData.WhatsApp}
            onChange={handleInputChange}
            style={{color: 'cyan'}}
          />
          <br/>
          <div>
            <label>Adress:</label>
          </div>
          <Input
            type="text"
            name="outroCampo"
            value={formData.Adress}
            onChange={handleInputChange}
            style={{color: 'cyan'}}
          />
          <br/>
          <div>
            <label>Self Description:</label>
          </div>
          <Input
            type="text"
            name="outroCampo"
            value={formData.SelfDescription}
            onChange={handleInputChange}
            style={{color: 'cyan'}}
          />
          <br/>
          <div>
            <label>Instrument Choices:</label>
          </div>
          <Input
            type="text"
            name="outroCampo"
            value={formData.InstrumentChoice}
            onChange={handleInputChange}
            style={{color: 'cyan'}}
          />
          <br/>
          <Button style={{color: 'Highlight', backgroundColor: 'white'}} onClick={handleSubmit}>Adicionar</Button>
        </form>
        <br/>
        <Button style={{backgroundColor: 'midnightblue'}}>
          <Link style={{color: 'orange'}} to='/App'><ArrowBackIcon/></Link>
        </Button>
      </Card>
    </div>
  );
};

export default EnterComponent;

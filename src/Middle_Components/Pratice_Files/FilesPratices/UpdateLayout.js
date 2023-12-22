import { Button } from 'antd/es/radio';
import React, { useState, useEffect } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const AtualizarPagina = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador > 0) {
      window.location.reload();
    }
  }, [contador]);

  return (
    <div>
      <Button style={{backgroundColor: 'white', boxShadow: '0 0 2px 3px', borderRadius: '100px'}} onClick={() => setContador(contador + 1)}><AutorenewIcon/></Button>
    </div>
  );
}

export default AtualizarPagina;
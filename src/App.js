
import './App.css';
import React from 'react'
import MenuPrincipal from './components/MenuPrincipal';
import { Grid,Menu,Segment, Label } from 'semantic-ui-react';
import TabelaReceitasGastos from './components/TabelaReceitasGastos';

function App() {
  return (
    <div className='body'>
      <MenuPrincipal></MenuPrincipal>
      <TabelaReceitasGastos></TabelaReceitasGastos>
        <Segment className='bottom-fixed' textAlign='center'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              Receitas
              <Label basic size='big'> R$ 50,00</Label>
            </Grid.Column>
            <Grid.Column width={5}>
              Despesas
              <Label basic size='big'> R$ 50,00</Label>
            </Grid.Column>
            <Grid.Column width={5}>
              Saldo
              <Label basic size='big'> R$ 50,00</Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Segment>
    </div>
  );
}

export default App;

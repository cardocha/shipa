
import './App.css';
import MenuPrincipal from './components/MenuPrincipal';
import { Button, Menu, Segment } from 'semantic-ui-react';
import TabelaReceitasGastos from './components/TabelaReceitasGastos';

function App() {
  return (
    <div className='body'>
      <MenuPrincipal></MenuPrincipal>
      <Segment.Group horizontal>
        <Segment >
        <Button content='Anterior' icon='left arrow' labelPosition='left' />
        </Segment>
        <Segment textAlign='center'>Janeiro 2021</Segment>
        <Segment textAlign='right'>
          <Button content='Próximo' icon='right arrow' labelPosition='right' />
        </Segment>
      </Segment.Group>
      <TabelaReceitasGastos></TabelaReceitasGastos>
      <Menu fixed='bottom'>Totais</Menu>
    </div>
  );
}

export default App;

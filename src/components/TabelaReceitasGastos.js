import React from 'react'
import { Table, Segment, Label } from 'semantic-ui-react'

const TabelaReceitasGastos = () => (
  <Segment.Group horizontal>
    <Segment>
      <Label ribbon color='green' basic size='small'>Receitas</Label>
      <Table celled size='small'>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>Descrição</Table.HeaderCell>
            <Table.HeaderCell>Valor</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Teste</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
    <Segment>
      <Label color='red' basic size='small' ribbon>Gastos</Label>
      <Table celled size='small'>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>Descrição</Table.HeaderCell>
            <Table.HeaderCell>Tipo</Table.HeaderCell>
            <Table.HeaderCell>Valor</Table.HeaderCell>
            <Table.HeaderCell>Pago</Table.HeaderCell>
            <Table.HeaderCell>Saldo</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Teste</Table.Cell>
            <Table.Cell>Teste</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  </Segment.Group>
)

export default TabelaReceitasGastos

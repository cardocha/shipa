import React from 'react'
import { Table, Segment, Label, Grid, Icon } from 'semantic-ui-react'

const TabelaReceitasGastos = () => (
  <Grid>
  <Grid.Row>
    <Grid.Column width={8}>
    <Segment inverted>
      <Table inverted celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Teste</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
    </Grid.Column>
    <Grid.Column width={8}>
    <Segment inverted>
      <Table inverted celled>
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
    </Grid.Column>
  </Grid.Row>
  </Grid>
)

export default TabelaReceitasGastos

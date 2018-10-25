import React from 'react';
import { Table, Button, Input } from 'semantic-ui-react';

const table = props => {


    if (!props.data) {
        return <div>no data detected or not connected to database</div>
    } else {
        const tableRows = props.data.map(dataRow => {
            return (
                <Table.Row>
                    <Table.Cell collapsing><Button primary onClick={}>Edit</Button></Table.Cell>
                    <Table.Cell>{dataRow.title}</Table.Cell>
                    <Table.Cell>{dataRow.episode}</Table.Cell>
                    <Table.Cell>{dataRow.description}</Table.Cell>
                </Table.Row>
            )
        })
    }

    
    return (
        <Table basic compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Episode Number</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {tableRows}
            </Table.Body>
        </Table>
    )
}

export default table;
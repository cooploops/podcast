import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const handleClick = () => {console.log('i work')}

const table = props => {

    if (!props.podcastdata) {
        return <div>no data detected or not connected to database</div>
    } else {
        const tableRows = props.podcastdata.map(dataRow => {
            const data = dataRow.data();
            return (
                <Table.Row>
                    <Table.Cell collapsing><Button primary onClick={handleClick}>Edit</Button></Table.Cell>
                    <Table.Cell>{data.title}</Table.Cell>
                    <Table.Cell>{data.episode}</Table.Cell>
                    <Table.Cell>{data.description}</Table.Cell>
                </Table.Row>
            );
        });

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

    

}

export default table;
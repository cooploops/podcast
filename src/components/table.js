import React, {Component} from 'react';
import { Table, Button } from 'semantic-ui-react';

class table extends Component {

handleEditClick = (data, id) => {
    this.setState({
        inEditMode: !this.state.inEditMode,
        activeEdit: id,
        tableTitleChange: data.title,
        tableNumberChange: data.episode,
        tableDescriptionChange: data.description
    })
}

handleTableInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
        [name]: value
    });
}

state = {
    inEditMode: false,
    activeEdit: null,
    tableTitleChange: null,
    tableNumberChange: null,
    tableDescriptionChange: null
}


render(){

    if (!this.props.podcastdata) {
        return <div>no data detected or not connected to database</div>
    } else {
        const tableRows = this.props.podcastdata.map(dataRow => {
            const data = dataRow.data();
            const id = dataRow.id;
            const { tableTitleChange, tableNumberChange, tableDescriptionChange} = this.state
            return (
                <Table.Row key={id}>
                    <Table.Cell collapsing>
                        <Button primary onClick={() => this.handleEditClick(data, id)}>{this.state.inEditMode ? 'Cancel' : 'Edit'}</Button>
                        {this.state.inEditMode &&
                        // get save function from admin.js to keep 'this' in context of admin.js since it has firebase instance open
                        <Button primary onClick={() => {
                            this.props.handleSaveClick(id, tableTitleChange, tableNumberChange, tableDescriptionChange)
                                .then(() => {
                                    this.setState({inEditMode: !this.state.inEditMode})
                                })
                            }}>Save</Button>}
                    </Table.Cell>
                    {this.state.inEditMode && this.state.activeEdit === id &&
                    <React.Fragment>
                        <Table.Cell><input id={id} name='tableTitleChange' type='text' value={tableTitleChange} onChange={this.handleTableInputChange}/></Table.Cell>
                        <Table.Cell><input id={id} name='tableNumberChange' type='number' value={tableNumberChange} onChange={this.handleTableInputChange}/></Table.Cell>
                        <Table.Cell><textarea id={id} name='tableDescriptionChange' value={tableDescriptionChange} onChange={this.handleTableInputChange}/></Table.Cell>
                    </React.Fragment>}
                    {!this.state.inEditMode &&
                    <React.Fragment>
                        <Table.Cell>{data.title}</Table.Cell>
                        <Table.Cell>{data.episode}</Table.Cell>
                        <Table.Cell>{data.description}</Table.Cell>
                    </React.Fragment>}
                
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

    

}

export default table;
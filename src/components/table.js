import React, {Component} from 'react';
import { Table, Button } from 'semantic-ui-react';

class table extends Component {

handleEditClick = (episode) => {
    this.setState({
        inEditMode: !this.state.inEditMode,
        activeEdit: episode
    })
    console.log(episode);
    console.log(this.state);
}

state = {
    inEditMode: false,
    activeEdit: null
}

render(){

    if (!this.props.podcastdata) {
        return <div>no data detected or not connected to database</div>
    } else {
        const tableRows = this.props.podcastdata.map(dataRow => {
            const data = dataRow.data();
            console.log(data);
            return (
                <Table.Row key={data.episode}>
                    <Table.Cell collapsing>
                        <Button primary onClick={() => this.handleEditClick(data.episode)}>{this.state.inEditMode ? 'Cancel' : 'Edit'}</Button>
                        {this.state.inEditMode &&
                        // get save function from admin.js to keep 'this' in context of admin.js since it has firebase instance open
                        <Button primary onClick={this.props.handleSaveClick}>Save</Button>}
                    </Table.Cell>
                    {this.state.inEditMode && this.state.activeEdit === data.episode &&
                    <React.Fragment>
                        <Table.Cell><input type='text' value={data.title}/></Table.Cell>
                        <Table.Cell><input type='number' value={data.episode}/></Table.Cell>
                        <Table.Cell><input value={data.description}/></Table.Cell>
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
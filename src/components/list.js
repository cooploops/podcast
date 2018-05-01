import React from 'react';
import {List} from 'semantic-ui-react';

// TODO turn this into a map as it'll be likely props will be an array of results
 const PodcastList = props => {
    return (
    <div>
        <h4>{props.listTitle}</h4>
        <List bulleted relaxed>
            <List.Item>
                <List.Content>
                    <List.Header href='#'>
                        Podcast Title
                    </List.Header>
                    <List.Description>
                        Silliness Ensues. 31 minutes 20 seconds.
                    </List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header href='#'>
                        Podcast Title
                    </List.Header>
                    <List.Description>
                        Shade Ensues. 28 minutes 56 seconds.
                    </List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header href='#'>
                        Podcast Title
                    </List.Header>
                    <List.Description>
                        Let's watch a hamster for 30 mins. 30 minutes 0 seconds.
                    </List.Description>
                </List.Content>
            </List.Item>
        </List>
    </div>
    )
};

 export default PodcastList;
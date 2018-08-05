import React from 'react';
import { Icon, Grid, Header } from 'semantic-ui-react'

const LoadingIcon = () => {

    const style = {
        paddingTop:'28vh',
        paddingBottom:'45vh',
    }

    const loadingStyle = {
        color: '#ff6b6b',
        fontFamily: 'Hanalei Fill, cursive',
        letterSpacing: '2px',
        fontWeight: 'normal'
    }
    return (
        <Grid columns='equal' textAlign='center'>
            <Grid.Row>
                <Grid.Column style={style}>
                    <Header style={loadingStyle} as='h1' icon>
                        <Icon loading name='spinner' size='massive'/>
                        Loading
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default LoadingIcon;
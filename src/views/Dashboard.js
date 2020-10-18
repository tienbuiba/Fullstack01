import React from 'react';
import { Typography, Paper } from '@material-ui/core';


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Paper>
                <Typography>
                    Welcome {this.props.username}
                </Typography>
            </Paper>
        )
    }
}
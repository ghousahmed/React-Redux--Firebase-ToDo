import React, { Component } from 'react';
import App from './App'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import './App.css';

const style = {
    backgroundColor: "#ff8a65"
}

const style1 = {
    height: "auto",
    minHeight: 500,
    width: 350,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class Main extends Component {



    render() {
        return (
            <div>
                <AppBar

                    title="Todo App"
                    style={style}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementLeft={<img src="https://vignette.wikia.nocookie.net/gtawiki/images/e/ee/GTAWiki-Todo-Checklist.png/revision/latest?cb=20151027125135" width="50" height="50" alt="img" />}
                />
                <center>
                    <Paper className="paper" style={style1} zDepth={2} >
                        <h2>TODO LIST</h2>
                        <App />
                    </Paper>
                </center>
            </div>
        );
    }
}








export default Main;

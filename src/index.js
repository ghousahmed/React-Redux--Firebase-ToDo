import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>

            <Main />
        </MuiThemeProvider>

    </Provider>, document.getElementById('root'));
registerServiceWorker();

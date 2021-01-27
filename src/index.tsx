import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import { createBrowserHistory } from "history";
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App'

const customHistory = createBrowserHistory();

ReactDOM.render((
    <Router history={customHistory}>
        <CssBaseline />
        <App />
    </Router>
), document.getElementById('app'))

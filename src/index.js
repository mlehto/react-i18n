import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LocalizeProvider } from "react-localize-redux";
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';


class App extends Component {
    render() {
        return (
        <LocalizeProvider>
            <Main />
        </LocalizeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Install necessary polyfills (see supported browsers) into global
import 'core-js/es6';
import 'core-js/stage/4';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';

import TxExplorer from './components/tx_explorer';

import '../../css/scss/main.scss';


const App = () => (
    <div className="app tx-explorer">
        <TxExplorer />
    </div>
);

ReactDOM.render(<App />, document.getElementById('bigchaindb-example-app'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AdminComponent from './netapp/adminComponent'

import Tournamentnet from './netapp/tournamentnet'




ReactDOM.render(

<div>
<App />
<AdminComponent />
<Tournamentnet />

</div>, document.getElementById('root'));
registerServiceWorker();

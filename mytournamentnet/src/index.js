import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Tournamentnet from './netapp/tournamentnet'
import AdminComponent from './netapp/adminComponent'






ReactDOM.render(

<div>
<App />
<AdminComponent />
<Tournamentnet />

</div>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

ReactDOM.render(
    /*
    <Badge 
        firstName="Carlos"
        lastName="Pérez"
        jobTitle="FrontEnd Enginner"
        twitter="dragmon"
    />, document.getElementById('app')
    */

    <BadgeNew />, container
);
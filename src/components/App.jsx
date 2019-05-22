import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';

function App(){
    return (
        
        <Router>
            <GlobalStyle />
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    );
};

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
`;

export default App;
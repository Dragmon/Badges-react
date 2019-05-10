import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={BadgeNew} />
                <Route exact path="/badges" component={Badges}/>                
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
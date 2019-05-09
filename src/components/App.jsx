import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew} />
            </Switch>
        </Router>
    );
}

export default App;
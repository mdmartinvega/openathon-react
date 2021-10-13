import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, Services, Innovation, Guestbook} from '../../containers';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/innovation" component={Innovation} />
                    <Route path="/guestbook" component={Guestbook} />
                </Switch>
            </div>
        );
    }
}

export default Main;
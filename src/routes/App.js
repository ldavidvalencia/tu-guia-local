import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Contacto from '../containers/Contacto';
import Home from '../containers/Home';
import NuestrosPlanes from '../containers/NuestrosPlanes';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/nuestros-planes" component={NuestrosPlanes} />
                <Route exact path="/contacto" component={Contacto} />
            </Switch>
        </Layout>
    </BrowserRouter>
);
 
export default App;
import React from 'react';
import { AuthRoute } from '../utils/route_util.jsx';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import GoodsContainer from './goods/goods_container';
import MainPage from './main/main_page';
import GoodManufactureContainer from './goods/good_manufacture_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/new_good" component={ GoodManufactureContainer } />
            <AuthRoute exact path="/goods" component={ GoodsContainer } />
            <AuthRoute exact path="/" component={ MainPage } />
        </Switch>
    </div>
);

export default App;
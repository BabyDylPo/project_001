import React from 'react';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <MainPage />
        </Switch>
    </div>
);

export default App;
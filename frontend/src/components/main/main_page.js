import React from 'react';
import { withRouter } from 'react-router-dom';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <h1>A List of Goods</h1>
                <footer>
                    Copyright &copy; 2019 dylpo
                </footer>
            </div>
        );
    }
}

export default withRouter(MainPage);
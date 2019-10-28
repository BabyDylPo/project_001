import React from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.getLinks = this.getLinks.bind(this);
    }

    // Selectively render links dependent on whether the user is logged in 
    getLinks() {
        return (
            <div>
                <Link to={'/goods'}>All Goods</Link>
                <br />
                <Link to={'/new_good'}>Create a Good!</Link>
            </div>
        );
    }

    render() {
        return (
            <div>
                { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;
import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="headerCSS">
                <img id='logo' src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"></img>
            </div>
        )
    }
}


export default Header;
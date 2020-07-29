import React from 'react';
import '../layout/Header.css';

const Header = (props) => {
    return(
        <header className="header-style">
            <div className="header-container">
                <div className="header-left-container">Aaron</div>
                <div className="header-menu-container">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

// Style definitions inside of the component
const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '60px',
};
const headerContainer = {
    width: '80%'
};
const headerLeftContainer = {

};
const headerMenuContainer = {

};

export default Header;
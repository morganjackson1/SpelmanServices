import React from 'react';

const Header = (props) => {
    const { onSearch, platformName = 'Spelman Services' } = props;

    const handleChange = (e) => {
        if (typeof onSearch === 'function') onSearch(e.target.value);
    };

    return (
        <header className="app-header">
            <h1 className="header-logo">{platformName}</h1>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for services or providers..."
                    onChange={handleChange}
                />
            </div>
        </header>
    );
}

export default Header
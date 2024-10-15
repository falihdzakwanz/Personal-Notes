import React from 'react';
import SearchBar from './SearchBar';

function Navbar({ searchTerm, setSearchTerm }) {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <h1>Aplikasi Catatan Pribadi</h1>
            </div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </nav>
    );
}

export default Navbar;
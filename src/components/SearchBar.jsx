import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='search-bar'
            placeholder="Cari catatan..."
        />
    );
}

export default SearchBar;
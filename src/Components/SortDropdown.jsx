import React from 'react';

const SortDropdown = ({ onSortChange }) => {
    const handleSortChange = (event) => {
        const sortOption = event.target.value;
        onSortChange(sortOption);
    };
    return (
        <select onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="likes_count">Likes</option>
            <option value="id">ID</option>
            <option value="message">Alphabetical</option>
        </select>
    );
};
export default SortDropdown;
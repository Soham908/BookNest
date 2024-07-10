'use client'
import React, { useState } from 'react';

export default function SearchBar() {
  
    const [ searchQuery, setSearchQuery ] = useState<string>("")
    return (
    <input
      type="text"
      placeholder="Search books..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 w-4/12"
    />
  );
}

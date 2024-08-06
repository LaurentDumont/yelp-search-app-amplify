// src/components/Search.tsx

"use client";

import { useState, useEffect } from 'react';

const Search = () => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<string[]>([]);

    useEffect(() => {
        if (query.length > 2) {
            const fetchData = async () => {
                const response = await fetch(`/api/search?q=${query}`);
                const data = await response.json();
                setResults(data.results);
            };

            fetchData();
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="max-w-md mx-auto">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 bg-yellow-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ul className="mt-4 space-y-2">
                {results.map((result, index) => (
                    <li key={index} className="text-black px-4 py-2 bg-purple-300 rounded-md">
                        {result}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
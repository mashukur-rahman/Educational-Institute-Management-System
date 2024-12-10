import React, { useState } from "react";
import axios from "axios";

const Enroll = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleEnroll = async (e) => {
        e.preventDefault();
        const search = e.target.search.value.trim();

        if (!search) {
            return;
        }

        setIsLoading(true);

        try {
            // Send the search query to the backend
            const response = await axios.get(`http://localhost:5000/search?name=${search}`);
            setSearchResults(response.data); // Assuming backend returns an array of results
        } catch (error) {
            console.error("Error fetching search results:", error);
            alert("Failed to fetch search results. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Enroll in Course</h2>

            {/* Search Form */}
            <form onSubmit={handleEnroll} className="mb-6">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="search"
                        className="grow"
                        placeholder="Search Name"
                    />
              <button type="submit">
              <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
              </button>
                </label>
            </form>

            {/* Results */}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchResults.map((result) => (
                        <div key={result.id} className="card p-4 border rounded shadow">
                            <h3 className="text-xl font-bold">{result.name}</h3>
                            <p>{result.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Enroll;

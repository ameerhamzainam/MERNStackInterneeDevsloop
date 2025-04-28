import React from 'react'

export interface FilterTaskProps {
    currentFilter: "all" | "active" | "completed"
    onFilterChange: (filter: "all" | "active" | "completed") => void;
}

const FilterTask: React.FC<FilterTaskProps> = ({ currentFilter, onFilterChange }) => {

    const filters: ("all" | "active" | "completed")[] = ["all", "active", "completed"]




    return (
        <div className="flex justify-center mb-4 gap-2">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`flex px-10 py-1 rounded-full ${currentFilter === filter ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
            ))}
        </div>
    )
}

export default FilterTask
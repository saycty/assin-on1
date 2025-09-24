import { useState } from "react";
import { filterStyles, iconStyles } from "@/styles/tailwind-utilities";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilterService: (service: string) => void;
  onSortChange: (sortBy: string) => void;
  services: string[];
}

export default function SearchFilter({
  onSearch,
  onFilterService,
  onSortChange,
  services,
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedService(value);
    onFilterService(value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedService("");
    setSortBy("name");
    onSearch("");
    onFilterService("");
    onSortChange("name");
  };

  return (
    <section id="workers" className={filterStyles.container}>
      <div className={filterStyles.innerContainer}>
        <div className={filterStyles.form}>
          {/* Search Input */}
          <div className={filterStyles.inputGroup}>
            <label htmlFor="search" className={filterStyles.label}>
              Search Workers
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className={iconStyles.searchIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className={filterStyles.input}
                placeholder="Search by name or service..."
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Service Filter */}
            <div className={filterStyles.inputGroup}>
              <label htmlFor="service-filter" className={filterStyles.label}>
                Filter by Service
              </label>
              <select
                id="service-filter"
                value={selectedService}
                onChange={handleServiceChange}
                className={filterStyles.select}
              >
                <option value="">All Services</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className={filterStyles.inputGroup}>
              <label htmlFor="sort-by" className={filterStyles.label}>
                Sort By
              </label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={handleSortChange}
                className={filterStyles.select}
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="service">Sort by Service</option>
              </select>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedService || sortBy !== "name") && (
              <button
                onClick={clearFilters}
                className={filterStyles.clearButton}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

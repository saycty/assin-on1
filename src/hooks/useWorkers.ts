import { useState, useEffect, useMemo, useCallback } from "react";
import { WorkerType } from "@/types/workers";

export function useWorkers() {
  const [workersData, setWorkersData] = useState<WorkerType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [displayedCount, setDisplayedCount] = useState(12); // Start with 12 workers
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await import("../../workers.json");
        setWorkersData(response.default);
        setError(null);
      } catch (error) {
        console.error("Failed to load workers:", error);
        setError("Failed to load workers data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const baseWorkers = useMemo(
    () =>
      workersData
        .filter((worker) => worker.pricePerDay > 0)
        .filter((worker) => worker.id !== null),
    [workersData]
  );

  const filteredWorkers = useMemo(() => {
    let filtered = baseWorkers;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (worker) =>
          worker.name.toLowerCase().includes(query) ||
          worker.service.toLowerCase().includes(query)
      );
    }

    // Service filter
    if (selectedService) {
      filtered = filtered.filter(
        (worker) => worker.service === selectedService
      );
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.pricePerDay - b.pricePerDay;
        case "price-high":
          return b.pricePerDay - a.pricePerDay;
        case "service":
          return a.service.localeCompare(b.service);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [baseWorkers, searchQuery, selectedService, sortBy]);

  const availableServices = useMemo(() => {
    const services = [...new Set(baseWorkers.map((worker) => worker.service))];
    return services.sort();
  }, [baseWorkers]);

  // Lazy loading logic
  const loadMoreWorkers = useCallback(() => {
    setLoadingMore(true);
    setTimeout(() => {
      setDisplayedCount((prev) => Math.min(prev + 12, filteredWorkers.length));
      setLoadingMore(false);
    }, 500); // Simulate loading delay
  }, [filteredWorkers.length]);

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(12);
  }, [searchQuery, selectedService, sortBy]);

  // Get current displayed workers
  const displayedWorkers = useMemo(() => {
    return filteredWorkers.slice(0, displayedCount);
  }, [filteredWorkers, displayedCount]);

  const hasMore = displayedCount < filteredWorkers.length;

  return {
    workers: displayedWorkers,
    allWorkers: filteredWorkers,
    totalCount: baseWorkers.length,
    filteredCount: filteredWorkers.length,
    availableServices,
    loading,
    error,
    searchQuery,
    selectedService,
    sortBy,
    setSearchQuery,
    setSelectedService,
    setSortBy,
    loadMoreWorkers,
    loadingMore,
    hasMore,
  };
}

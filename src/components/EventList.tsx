import { useState, useEffect } from "react";
import { useEvents, Event } from "../hooks/useEvents";
import EventCard from "./EventCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const EventList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(false);

  // Fetch events with search, page, and filter applied
  const {
    data: events = [],
    isLoading,
    error,
  } = useEvents(page, search, petsAllowed);

  // Reset page when search or filters change
  useEffect(() => {
    setPage(1);
  }, [search, petsAllowed]);

  if (isLoading) return <p className="text-center">Loading events...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">
        {error.message || "Failed to load events"}
      </p>
    );

  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-[40px] text-center">
        <SearchBar setSearch={setSearch} />
        <Filters petsAllowed={petsAllowed} setPetsAllowed={setPetsAllowed} />
      </div>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="flex items-center gap-[40px] justify-center my-10">
          {events.map((event: Event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default EventList;

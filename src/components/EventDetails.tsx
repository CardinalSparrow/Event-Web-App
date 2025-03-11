import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events";

// Define the Event type
interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

const fetchEventById = async (id?: string): Promise<Event> => {
  if (!id) throw new Error("Invalid event ID");
  const { data } = await axios.get<Event>(`${url}/${id}`);
  return data;
};

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: event,
    isLoading,
    error,
  } = useQuery<Event, Error>({
    queryKey: ["event", id],
    queryFn: () => fetchEventById(id),
    enabled: !!id,
  });

  if (isLoading) return <p className="text-center">Loading event details...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading event.</p>;

  if (!event) return <p className="text-center">Event not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
      <p className="text-gray-700 mb-2">{event.description}</p>
      <p>
        <strong>📍 Location:</strong> {event.location}
      </p>
      <p>
        <strong>📅 Date:</strong> {event.date} | <strong>⏰ Time:</strong>{" "}
        {event.time}
      </p>
      <p>
        <strong>🐾 Pets Allowed:</strong> {event.petsAllowed ? "Yes" : "No"}
      </p>
      <p>
        <strong>👤 Organizer:</strong> {event.organizer}
      </p>
    </div>
  );
};

export default EventDetails;

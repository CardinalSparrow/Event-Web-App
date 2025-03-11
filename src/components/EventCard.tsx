import { Link } from "react-router-dom";

const EventCard = ({ event }: { event: any }) => {
  return (
    <div className="border p-4 rounded-md shadow-md w-fit">
      <h2 className="text-xl font-bold">{event.title}</h2>
      <p>{event.description}</p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        {" "}
        <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Organizer:</strong> {event.organizer}
      </p>
      <p className={event.petsAllowed ? "text-green-500" : "text-red-500"}>
        {event.petsAllowed ? "Pets Allowed ✅" : "No Pets ❌"}
      </p>
      <Link
        to={`/event/${event.id}`}
        className="text-white p-2 bg-green-500 mt-2 block text-center rounded-xl hover:bg-white hover:text-green-500 border-green-500 border"
      >
        View Details
      </Link>
    </div>
  );
};

export default EventCard;

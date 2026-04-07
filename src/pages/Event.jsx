import { useEffect, useState } from "react";
import EventCards from "../components/core/Event/EventCards";
import EventCardsSkeleton from "../components/skeletons/event/EventCardsSkeliton";
import { getEvents } from "../services/oprations/event";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const eventFetch = async () => {
      setLoading(true);
      const result = await getEvents();
      setLoading(false);
      setEvents(result ? result : []);
    };
    eventFetch();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🎉 Events</h1>

      {loading ? (
        <EventCardsSkeleton />
      ) : events.length < 1 ? (
        <p>Koi event nahi mila.</p>
      ) : (
        // ✅ FIX 3: events prop pass kiya
        <EventCards events={events} />
      )}
    </div>
  );
};

export default Event;

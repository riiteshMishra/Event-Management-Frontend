import { useEffect, useState } from "react";
import EventCards from "./EventCards";
import EventCardsSkeleton from "../../skeletons/event/EventCardsSkeliton";
import { getEvents } from "../../../services/oprations/event";
import NoEvents from "./NoEvents";

const EventCard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const eventFetch = async () => {
      let result;
      try {
        setLoading(true);
        result = await getEvents();
      } finally {
        setEvents(result ? result : []);
        setLoading(false);
      }
    };
    eventFetch();
  }, []);

  return (
    <div>
      <h1
        className={`text-3xl font-bold mb-6 text-center ${events.length > 0 ? "block" : "hidden"} `}
      >
        Events
      </h1>
      {loading ? <EventCardsSkeleton /> : events.length > 1 ? <EventCard /> : <NoEvents />}
    </div>
  );
};

export default EventCard;

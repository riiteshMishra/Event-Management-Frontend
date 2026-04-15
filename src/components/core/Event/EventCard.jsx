import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        setEvents(result);
        setLoading(false);
      }
    };
    eventFetch();
  }, []);

  //  SEO (dynamic title + meta)
  useEffect(() => {
    document.title = "Events | Event Management";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore upcoming events, book tickets, and stay updated with the latest happenings."
      );
    }
  }, []);

  return (
    <div className="container py-10">

      {/* <motion.h1
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-bold mb-6 text-center ${
          events.length > 0 ? "block" : "hidden"
        } `}
      >
        Events
      </motion.h1> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {loading ? (
          <EventCardsSkeleton />
        ) : events.length < 1 ? (
          <NoEvents />
        ) : (
          <EventCards events={events} />
        )}
      </motion.div>
    </div>
  );
};

export default EventCard;
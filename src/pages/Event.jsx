import { useEffect, useState } from "react";
import EventCards from "../components/core/Event/EventCards";
import EventCardsSkeleton from "../components/skeletons/event/EventCardsSkeliton";
import { getEvents } from "../services/oprations/event";
import EventCard from "../components/core/Event/EventCard";
import Footer from "../components/core/Footer/Index";

const Event = () => {


  return (
    <div className="EventPage min-h-screen bg-light dark:bg-dark/95">
     <EventCard/>
     {/* <Footer/> */}
    </div>
  );
};

export default Event;

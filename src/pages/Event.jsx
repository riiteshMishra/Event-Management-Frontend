import { useEffect, useState } from "react";
import EventCards from "../components/core/Event/EventCards";
import EventCardsSkeleton from "../components/skeletons/event/EventCardsSkeliton";
import { getEvents } from "../services/oprations/event";
import EventCard from "../components/core/Event/EventCard";

const Event = () => {


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
     <EventCard/>
    </div>
  );
};

export default Event;

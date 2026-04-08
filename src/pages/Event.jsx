import { useEffect, useState } from "react";
import EventCards from "../components/core/Event/EventCards";
import EventCardsSkeleton from "../components/skeletons/event/EventCardsSkeliton";
import { getEvents } from "../services/oprations/event";
import EventCard from "../components/core/Event/EventCard";
import Footer from "../components/core/Footer/Index";
import InfoSection from "../components/core/Event/InfoSection";
import EventInfo from "../components/core/Event/EventInfo";

const Event = () => {
  return (
    <div className="EventPage min-h-screen w-full bg-light dark:bg-dark/95">
      <EventCard />
      <InfoSection />
      <EventInfo />
      <Footer />
    </div>
  );
};

export default Event;

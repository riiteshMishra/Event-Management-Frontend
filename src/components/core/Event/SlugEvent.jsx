import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getEventBySlug } from '../../../services/oprations/event';
import CandidateCard from './view/CandidateCard';
import EventSkeleton from '../../skeletons/event/ViewEvent';
import NoEvents from './NoEvents';
import { Helmet } from "react-helmet-async";
const SlugEventPage = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const fetchEvent = async () => {
      try {
        setLoading(true)
        const result = await getEventBySlug(slug);
        setEvent(result);
      } finally {
        setLoading(false)
      }
    };

    fetchEvent();
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{event ? event.title : "Event Details"}</title>

        <meta
          name="description"
          content={
            event?.description || "View event details, candidates and instructions"
          }
        />

        {/* Open Graph (for WhatsApp / Facebook sharing) */}
        <meta property="og:title" content={event?.title} />
        <meta property="og:description" content={event?.description} />
        <meta property="og:image" content={event?.thumbnail} />
      </Helmet>
      <section className='bg-light dark:bg-dark/95'>
        <div className="max-w-6xl mx-auto px-4 py-8 ">

          {
            loading ? <EventSkeleton /> :

              !event ? <NoEvents /> :

                <div className="space-y-8">

                  {/* Header Section */}
                  <div className="bg-white shadow-md rounded-2xl overflow-hidden">
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-full h-[300px] object-cover"
                    />

                    <div className="p-6 space-y-3">
                      <h1 className="text-3xl font-bold text-gray-800">
                        {event.title}
                      </h1>

                      <p className="text-gray-600">
                        {event.description}
                      </p>

                      {/* Status Badge */}
                      <span className={`inline-block px-3 py-1 text-sm rounded-full ${event.status === "completed"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                        }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>

                  {/* Details Card */}
                  <div className="bg-white shadow-md rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">

                    <p><b>Village:</b> {event.village}</p>
                    <p><b>District:</b> {event.district}</p>
                    <p><b>State:</b> {event.state}</p>

                    <p>
                      <b>Start:</b>{" "}
                      {event.startDate
                        ? new Date(event.startDate).toLocaleString()
                        : "N/A"}
                    </p>

                    <p>
                      <b>End:</b>{" "}
                      {event.endDate
                        ? new Date(event.endDate).toLocaleString()
                        : "N/A"}
                    </p>

                  </div>

                  {/* Instructions Card */}
                  <div className="bg-white shadow-md rounded-2xl p-6">

                    <h2 className="text-xl font-semibold mb-3 text-gray-800">
                      Instructions
                    </h2>

                    <ul className="list-disc ml-6 space-y-1 text-gray-600">
                      {event.instructions?.length > 0 ? (
                        event.instructions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>No instructions available</li>
                      )}
                    </ul>

                  </div>

                  {/* Candidates */}
                  {
                    event.type === "election" && <CandidateCard
                      candidates={event.candidates}
                      status={event.status}
                    />
                  }

                </div>
          }
        </div>
      </section>
    </>
  );
};

export default SlugEventPage;
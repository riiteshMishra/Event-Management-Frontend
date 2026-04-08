import { motion } from "framer-motion";
import {
    FaVoteYea,
    FaGlassCheers,
    FaUsers,
    FaHeartbeat,
} from "react-icons/fa";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { GiFairyWings, GiTrophy } from "react-icons/gi";
import { MdSportsEsports } from "react-icons/md";
import { BiMusic } from "react-icons/bi";
import EventGuidlines from "./Guidlines";

const EventInfo = () => {
    const eventTypes = [
        {
            title: "Election Events",
            icon: <FaVoteYea />,
            desc: "Voting, candidate introduction aur public discussions ke events.",
        },
        {
            title: "Party Events",
            icon: <FaGlassCheers />,
            desc: "Music, food aur celebration based social events.",
        },
        {
            title: "Meeting Events",
            icon: <FaUsers />,
            desc: "Planning, development aur important discussions ke liye meetings.",
        },
        {
            title: "Health Care Events",
            icon: <FaHeartbeat />,
            desc: "Medical camps, free checkups aur health awareness programs.",
        },
        {
            title: "Festival Events",
            icon: <GiFairyWings />,
            desc: "Traditional celebrations, music, dance aur cultural activities.",
        },
        {
            title: "Gaming Events",
            icon: <MdSportsEsports />,
            desc: "Online/offline tournaments jahan players compete karte hain.",
        },
        {
            title: "Local Competitions",
            icon: <GiTrophy />,
            desc: "Sports, quiz aur talent competitions local level par.",
        },
        {
            title: "Cultural Events",
            icon: <BiMusic />,
            desc: "Dance, singing aur stage performances wale events.",
        },
    ];

    return (
        <section
            className="text-dark dark:text-light"
            aria-labelledby="event-info-heading"
        >
            <div className="w-11/12 mx-auto py-8">

                {/* HEADER */}
                <header className="bg-white/80 dark:bg-dark/80 p-6 rounded-xl shadow-md text-center">
                    <div className='flex flex-col items-center'>
                        <motion.div className=' h-fit w-fit'
                            initial={{ y: 50, opacity: .8, scale: .8 }}
                            whileInView={{
                                scale: 1, opacity: 1, y: 0, transition: {
                                    duration: .3,
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 200
                                }
                            }}
                        >
                            <DotLottieReact
                                src="/animated icons/event.lottie"
                                loop
                                autoplay
                                className=' w-60'
                            />
                        </motion.div>
                        <h1
                            id="event-info-heading"
                            className="text-2xl sm:text-3xl font-bold"
                        >
                            Event Types & Information
                        </h1>
                    </div>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Discover different types of events like elections, parties,
                        meetings, festivals and more. Get full details about rules,
                        participation and rewards.
                    </p>
                </header>

                {/* EVENT TYPES */}
                <div className="grid gap-6 md:grid-cols-3 mt-8" role="list">
                    {eventTypes.map((item, index) => (
                        <motion.article
                            key={index}
                            role="listitem"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.12 }}
                            className="bg-white dark:bg-dark/70 p-5 rounded-xl shadow-md hover:scale-105 transition"
                        >
                            <motion.div className="text-2xl mb-2 text-yellow-500 h-fit w-fit cursor-pointer"
                                initial={{ scale: 1 }}
                                whileHover={{
                                    scale: 1.5,
                                    transition: {
                                        duration: .3,
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 300
                                    }
                                }}
                            >
                                {item.icon}
                            </motion.div>

                            <h2 className="text-lg font-semibold">
                                {item.title}
                            </h2>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                {item.desc}
                            </p>
                        </motion.article>
                    ))}
                </div>

                {/* DETAILS */}
                <section
                    className="mt-10 bg-white dark:bg-dark/80 p-6 rounded-xl shadow-md"
                    aria-labelledby="event-details-heading"
                >
                    <h2
                        id="event-details-heading"
                        className="text-xl font-semibold mb-3"
                    >
                        Event Details & Guidelines
                    </h2>

                    <EventGuidlines />

                    {/* ENUM TYPES */}
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">
                            Available Event Categories
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {["election", "party", "meeting", "function", "festival"].map(
                                (type) => (
                                    <span
                                        key={type}
                                        className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-400/20 dark:text-yellow-300"
                                    >
                                        {type}
                                    </span>
                                )
                            )}
                        </div>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            Events can only be created within these categories.
                        </p>
                    </div>
                </section>

            </div>
        </section>
    );
};

export default EventInfo;
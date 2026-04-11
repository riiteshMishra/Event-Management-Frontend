import { LayoutGroup, motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom";

const QuickLinks = () => {

    const location = useLocation();

    const matchRoute = (path) => {
        return path === location.pathname
    }

    const quickLinks = [
        { id: 1, path: "/", title: "Home" },
        { id: 2, path: "/events", title: "Events" },
        { id: 3, path: "/about", title: "About" },
        { id: 4, path: "/contact", title: "Contact" },
        { id: 5, path: "/terms", title: "Terms & Conditions" },
        { id: 6, path: "/privacy-policy", title: "Privacy Policy" },
    ];

    return (
        <motion.div>
            <h3 className="font-semibold text-lg">Quick Links</h3>

            <LayoutGroup>
                <ul className="flex flex-wrap">
                    {quickLinks.map(link => (
                        <li key={link.id} className="relative list-none">

                            {/* Active background pill */}
                            {matchRoute(link.path) && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-dark dark:bg-light 
                                     rounded-lg"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}

                            <Link
                                to={link.path}
                                className={`relative z-10 block px-3 py-1.5 rounded-lg transition-colors duration-300 h-fit w-fit
                                ${matchRoute(link.path) ? "text-light dark:text-dark" : "text-gray-400 hover:text-white"}`}
                            >
                                {link.title}
                            </Link>

                        </li>
                    ))}
                </ul>
            </LayoutGroup>
        </motion.div>
    )
}

export default QuickLinks;
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Footer from "../components/core/Footer/Index";

const PrivacyPolicy = () => {
    return (
        <div className="dark:bg-dark/95 min-h-screen bg-light">

            <section className="container px-4 py-8
        
        ">

                {/* SEO */}
                <Helmet>
                    <title>Privacy Policy | Event Management</title>
                    <meta
                        name="description"
                        content="Privacy policy for our village event and election management platform."
                    />
                </Helmet>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                    Privacy Policy
                </h1>

                {/* Grid layout */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    className="grid gap-6 md:grid-cols-2 py-10"
                >

                    {/* Card */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-white dark:bg-dark rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-lg font-semibold mb-2 text-dark dark:text-light">1. Information We Collect</h2>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-dark dark:text-light">
                            <li>Name and basic details</li>
                            <li>Email / phone for OTP</li>
                            <li>Voting activity (not public)</li>
                        </ul>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-white dark:bg-dark rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-lg font-semibold mb-2 text-dark dark:text-light">2. How We Use Data</h2>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-dark dark:text-light">
                            <li>Manage events & elections</li>
                            <li>Prevent duplicate voting</li>
                            <li>Improve system performance</li>
                        </ul>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-white dark:bg-dark rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-lg font-semibold mb-2 text-dark dark:text-light">3. Data Security</h2>
                        <p className="text-sm text-dark dark:text-light">
                            Your data is protected using secure methods and is not shared without consent.
                        </p>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-white dark:bg-dark rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-lg font-semibold mb-2 text-dark dark:text-light">4. Data Sharing</h2>
                        <p className="text-sm text-dark dark:text-light">
                            We do not sell your data. Only admins can access necessary information.
                        </p>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-white dark:bg-dark rounded-2xl p-5 shadow-md border text-dark dark:text-light border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-lg font-semibold mb-2">5. Cookies</h2>
                        <p className="text-sm">
                            Cookies may be used to improve experience and maintain sessions.
                        </p>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-white dark:bg-dark rounded-2xl p-5 shadow-md border text-dark dark:text-light border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-lg font-semibold mb-2">6. Your Rights</h2>
                        <ul className="list-disc ml-5 text-sm space-y-1">
                            <li>Request data deletion</li>
                            <li>Contact for privacy concerns</li>
                        </ul>
                    </motion.div>

                    {/* Full width card */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-white dark:bg-dark rounded-2xl p-5 shadow-md border text-dark dark:text-light border-gray-200 dark:border-gray-700 md:col-span-2"
                    >
                        <h2 className="text-lg font-semibold mb-2">7. Contact Us</h2>
                        <p className="text-sm">
                            For any questions, contact the administrator of this platform.
                        </p>
                    </motion.div>

                </motion.div>
            </section>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
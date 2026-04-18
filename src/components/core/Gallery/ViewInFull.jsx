import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiCrossMark } from "react-icons/gi";

const ViewInFull = ({ modalData, onClose }) => {

    // ESC key support
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    useEffect(() => {
        if (modalData) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalData]);
    return (
        <AnimatePresence>
            {modalData && (
                <motion.div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 cursor-pointer"

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                    onClick={onClose}
                >
                    {/* Modal Content */}
                    <motion.div
                        className="relative w-full max-w-5xl flex flex-col items-center"

                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}

                        transition={{ duration: 0.25 }}

                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button  */}
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 sm:-top-10 sm:right-0 
                         bg-white/10 backdrop-blur px-3 py-1 rounded-full 
                         text-white text-lg"
                        >
                            <GiCrossMark className="text-red-500  cursor-pointer" />
                        </button>

                        {/* Image */}
                        <img
                            src={modalData?.image}
                            alt={modalData?.title}
                            className="w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-lg pointer-events-none"
                        />

                        {/* Caption */}
                        <p className="text-white text-sm sm:text-base mt-3 text-center px-2">
                            {modalData?.title}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ViewInFull;
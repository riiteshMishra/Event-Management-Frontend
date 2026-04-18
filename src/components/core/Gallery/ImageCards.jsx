import { galleryImages } from "./gallery.data";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const ImageCards = ({ imageModal, setImageModal }) => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-6">
            <Helmet>
                <title>Gallery | Event Management</title>
                <meta
                    name="description"
                    content="Explore our event gallery with images from elections, functions and activities."
                />
            </Helmet>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center"
            >
                Gallery
            </motion.h2>

            {
                !galleryImages || galleryImages.length < 1 ? (
                    <p className="text-center text-gray-500">No images available</p>
                ) : (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.08,
                                },
                            },
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {
                            galleryImages.map((imageData) => (
                                <motion.div
                                    key={imageData.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ImageCard
                                        imageData={imageData}
                                        setImageModal={setImageModal}
                                        imageModal={imageModal}
                                    />
                                </motion.div>
                            ))
                        }
                    </motion.div>
                )
            }

        </section>
    );
};

export default ImageCards;
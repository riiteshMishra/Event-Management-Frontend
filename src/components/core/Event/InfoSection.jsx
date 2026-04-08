import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";

const InfoSection = () => {
    return (
        <section className='text-dark dark:text-light'><div className="w-11/12 mx-auto py-5">
            <div className="bg-white/80 dark:bg-dark/80 p-6 rounded-xl shadow-md text-center">
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
                    <h1 className="text-2xl sm:text-3xl font-bold ">
                        Welcome to Events Page
                    </h1>
                </div>

                <p className="mt-2 text-sm sm:text-base">
                    Yahan aap sabhi upcoming aur nearby events dekh sakte hain.
                    Apna favorite event choose karein aur participate karein.
                </p>
            </div>
        </div></section>
    )
}

export default InfoSection
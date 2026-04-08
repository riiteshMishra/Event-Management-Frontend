import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Button1 from "../../common/Button1";

const parentVariants = {
    initial: {
        y: 40,
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 18,
            staggerChildren: 0.3,
        },
    },
};
const childVariants = {
    initial: {
        y: 30,
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

const NoEvents = () => {
    return (
        <div className="flex items-center justify-center ">

            <motion.div
                transition={{}}
                className="text-center flex flex-col items-center gap-y-3 mt-6"
                variants={parentVariants} initial="initial" animate="animate"
            >

                {/*  Icon */}
                <motion.div variants={childVariants} className="h-fit w-fit">
                    <DotLottieReact
                        src="/animated icons/loading.lottie"
                        loop
                        autoplay
                       className="h-50 sm:h-80"
                    />
                </motion.div>

                {/*  Heading */}
                <motion.p className="text-2xl font-semibold text-dark dark:text-light" variants={childVariants}>
                    No Events Found
                </motion.p>

                {/*  Description */}
                <motion.p variants={childVariants} className="text-sm  text-dark dark:text-light max-w-xs mx-auto">
                    Looks like there are no events available right now. Please check
                    back later.
                </motion.p>

                {/*  Action Button */}
                <motion.div variants={childVariants}>
                    <Button1
                        text="Refresh"
                        onClick={() => window.location.reload()}
                        icon={
                            <svg viewBox="0 0 512 512" className="h- w-5">
                                <path
                                    fill="currentColor"
                                    d="M500.33 0l11.34 11.31-96 96-11.31-11.31 44.69-44.69C414.2 20.8 366.3 0 312 0 189.4 0 88.5 85.4 64.8 198.6l-49.4-10C45.3 61.2 165.2 0 312 0c63.2 0 120.3 23.4 164.6 61.4L500.33 0zM496.6 323.4C466.7 450.8 346.8 512 200 512c-63.2 0-120.3-23.4-164.6-61.4L11.67 512 0 500.7l96-96 11.31 11.31-44.69 44.69C97.8 491.2 145.7 512 200 512c122.6 0 223.5-85.4 247.2-198.6l49.4 10z"
                                />
                            </svg>
                        }
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default NoEvents
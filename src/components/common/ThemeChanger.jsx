import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { changeTheme } from "../../redux/Slices/Theme/theme";

const ThemeChanger = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(changeTheme())}
      className="w-14 h-6 flex items-center rounded-full cursor-pointer bg-dark dark:bg-white px-1"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-4 h-4 rounded-full bg-white dark:bg-black"
        style={{
          marginLeft: theme === "dark" ? "auto" : "0",
        }}
      />
    </div>
  );
};

export default ThemeChanger;

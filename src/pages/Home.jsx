import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/Slices/Theme/theme";

const Home = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        onClick={() => dispatch(changeTheme())}
        className={`${theme === "light" ? "text-black" : "text-white"}`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, maiores!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        corporis itaque corrupti. Non doloremque eius ad quasi alias
        exercitationem explicabo?
      </div>

      <div className="dark:bg-white bg-accent">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
        cupiditate? Sequi aspernatur maxime doloribus placeat, iusto inventore
        perferendis nesciunt optio? In magni nihil eveniet quaerat inventore
        sapiente earum dolorem numquam?
      </div>
    </div>
  );
};

export default Home;

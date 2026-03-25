import { createSlice } from "@reduxjs/toolkit";

let savedTheme = "light";

try {
  const data = localStorage.getItem("theme");
  savedTheme = data ? JSON.parse(data) : "light";
} catch {
  savedTheme = "light";
}

const initialState = {
  theme: savedTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";

      localStorage.setItem("theme", JSON.stringify(state.theme));

      document.documentElement.classList.toggle(
        "dark",
        state.theme === "dark"
      );
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
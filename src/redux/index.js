import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slices/Theme/theme";
import changeLanguageReducer from "./Slices/Theme/language"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        language: changeLanguageReducer,
    },
});

export default store;
import { createSlice } from "@reduxjs/toolkit";

const validLanguages = ['hi-IN', 'en-US'];
const savedLanguage = localStorage.getItem("language") || navigator.language;

const initialState = {
    language: savedLanguage ? savedLanguage : validLanguages[1],
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        changeLanguage: (state, actions) => {
            // validate
            const language = actions.payload
            if (!validLanguages.includes(language))
                return alert("Invalid Language choosen");

            state.language = language;
            localStorage.setItem("language", language);
        }
    }
})

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer
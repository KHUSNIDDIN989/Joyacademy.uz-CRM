
import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from './Slices/LanguageSlice';
import ThemeSlice from "./Slices/ThemeSlice";
import appealSlice from "./Slices/AppealSlice";
const store = configureStore({
  reducer: {
    language: LanguageSlice.reducer,
    isDark: ThemeSlice.reducer, 
    appeal:appealSlice.reducer
  },
});
export default store;
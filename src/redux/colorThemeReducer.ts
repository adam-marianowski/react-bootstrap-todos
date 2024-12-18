import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ColorThemeState {
  color: "light" | "dark";
}

const initialState: ColorThemeState = { color: "light" };

export const colorThemeReducer = createSlice({
  name: "colorTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.color = state.color === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = colorThemeReducer.actions;

export const selectColorTheme = (state: RootState) => state.colorTheme.color;

export default colorThemeReducer.reducer;

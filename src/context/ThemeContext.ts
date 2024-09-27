import { createContext } from "react";
import {
  IThemeContext,
  IUpdateThemeContext,
} from "../interfaces/ThemeInterface";

export const ThemeContext = createContext<IThemeContext>({ isDark: false });

export const UpdateThemeContext = createContext<IUpdateThemeContext>({
  updateTheme: () => {},
});

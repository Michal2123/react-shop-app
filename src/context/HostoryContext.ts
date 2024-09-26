import { createContext } from "react";
import {
  IHistoryContext,
  IUpdateHistoryContext,
} from "../interfaces/HistoryInterface";

export const HistoryContext = createContext<IHistoryContext>({
  history: [],
});

export const UpdateHistoryContext = createContext<IUpdateHistoryContext>({
  updateHistory: () => {},
  getUserHistory: () => {},
});

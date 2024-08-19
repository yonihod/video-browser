import { Data } from "@web-types/common";
import { createContext } from "react";

export const DataContext = createContext<Data>({
  videos: [],
  genres: [],
});

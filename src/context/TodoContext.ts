import { createContext } from "react";

export const TodoContext = createContext([[], () => {}]);

export enum Status{
  NOT_DONE,
  DONE
}
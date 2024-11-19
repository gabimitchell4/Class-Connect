import { ReactNode } from "react";

export type Pair = {
  name: string;
  age: number;
  gender: string;
  hobbies: string[];
};

export type Event = {
  id: number;
  title: string;
  icon: ReactNode;
  date: string;
  startTime: string;
  endTime: string;
  pair?: Pair;
  location: string;
};

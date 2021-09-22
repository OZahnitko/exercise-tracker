import localforage from "localforage";

import { Data } from "../contracts";

export const storeExercises = async (exercises: string[]) =>
  await localforage.setItem("exercises", exercises);

export const fetchExercises = async (): Promise<string[] | null> =>
  await localforage.getItem("exercises");

export const storeData = async (data: Data) =>
  await localforage.setItem("data", data);

export const fetchData = async (): Promise<Data | null> =>
  await localforage.getItem("data");

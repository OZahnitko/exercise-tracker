import localforage from "localforage";
import { DateTime } from "luxon";

import { Data, Exercise } from "../contracts";
import data from "../data/data.json";

export const checkLocalStorage = async () => {
  const localData = await fetchData();

  if (!localData) {
    await storeData(data);
  } else {
    if (
      DateTime.fromISO(localData.lastUpdatedOn) <
      DateTime.fromISO(data.lastUpdatedOn)
    ) {
      await storeData({
        ...localData,
        lastUpdatedOn: data.lastUpdatedOn,
        exercises: data.exercises,
      });
    }
  }
};

export const storeData = async (data: Data) =>
  await localforage.setItem("data", data);

export const fetchData = async (): Promise<Data | null> =>
  await localforage.getItem("data");

export const fetchExercises = async (): Promise<Exercise[]> => {
  const data: { exercises: Exercise[] } | null = await localforage.getItem(
    "data"
  );

  return data!.exercises;
};

import localforage from "localforage";
import { DateTime } from "luxon";

import { Data, Exercise } from "../contracts";
import data from "../data/data.json";

export const checkLocalStorage = async () => {
  const localData = await fetchData();

  if (!localData) {
    await storeData(data);
  } else {
    //  Need to check if the local date is of the latest version.
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

import localforage from "localforage";
import { DateTime } from "luxon";

import { Data } from "../contracts";
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
      await storeData(data);
    }
  }
};

export const storeData = async (data: Data) =>
  await localforage.setItem("data", data);

export const fetchData = async (): Promise<Data | null> =>
  await localforage.getItem("data");

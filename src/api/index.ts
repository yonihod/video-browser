import { DATA_URL } from "@constants";
import { Data } from "@web-types/common";

/**
 *
 * @description Fetches data from the API
 * @returns {Promise<Data>}
 */
export function getData(): Promise<Data> {
  return fetch(DATA_URL)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

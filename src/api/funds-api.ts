import { funds } from "../db/mock-data"
import { Fund } from "../types/types";

// Simulating an actual api call by putting a delay on the response.

export const getFunds = (): Promise<Fund[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(funds);
        }, 1000);
    });
}

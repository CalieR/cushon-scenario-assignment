import { Portfolio } from "../types/types";
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "../services/local-storage-service";

export const getInvestmentsByCustomerId = (customerId: number): Portfolio => {
  return readFromLocalStorage(`customer-${customerId}-portfolio`);
};

export const persistInvestment = (customerId: number, portfolio: Portfolio) => {
  return writeToLocalStorage(`customer-${customerId}-portfolio`, portfolio);
};

// In the real world we wouldn't actually keep this information in local storage!

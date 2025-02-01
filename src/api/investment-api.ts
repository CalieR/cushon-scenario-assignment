import { Investment } from '../types/types';
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from '../services/local-storage-service';

export const getInvestmentByCustomerId = (customerId: number): Investment => {
  return readFromLocalStorage(`customer ${customerId}: investments`);
};

export const createInvestment = (
  customerId: number,
  investment: Investment
) => {
  return writeToLocalStorage(`customer ${customerId}: investments`, investment);
};

// In the real world we wouldn't actually keep this information in local storage!
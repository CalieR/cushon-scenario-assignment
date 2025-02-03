/* eslint-disable no-unused-vars */
export type Fund = {
  id: number;
  name: string;
  description: string;
};

export type Investment = {
  id: string;
  customerId: number;
  fundId: number;
  fundName: string;
  amount: number;
  dateCreated: Date;
};

export type Portfolio = {
  customerId: number;
  investments: Investment[];
  totalInvested: number;
  remainingAllocation: number;
};

export type Customer = {
  id: number;
  name: string;
};

export type ValidationResponse = {
  success: boolean;
  message: string;
};

export interface InvestmentStore {
  investableFunds: Fund[];
  selectedFund: Fund | null;
  portfolio: Portfolio;
  customer: Customer;
  setInvestableFunds: (funds: Fund[]) => void;
  selectFund: (fund: Fund) => void;
  unSelectFund: () => void;
  addInvestment: (fund: Fund, amount: number) => ValidationResponse;
}

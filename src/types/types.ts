/* eslint-disable no-unused-vars */
export type Fund = {
  id: number;
  name: string;
  description: string;
};

// Fund could feasibly contain other bits of information, or it could just be a reference to a database table containing full details

export type Investment = {
  id: string;
  customerId: number;
  fundId: number;
  fundName: string;
  amount: number;
  dateCreated: Date;
};

// in the future when multiple funds selection is allowed, fundId could be an array of funds

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
  selectFund: (fund: Fund) => void;
  unSelectFund: () => void;
  addInvestment: (fund: Fund, amount: number) => ValidationResponse;
}

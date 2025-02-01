import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Fund, Investment, InvestmentStore, Portfolio } from "../types/types";

const validateInvestment = (amount: number, portfolio: Portfolio) => {
  if (amount <= 0) {
    return {
      success: false,
      message: `You must invest at least £1 in this fund - you have ${portfolio.remainingAllocation} left to invest`,
    };
  }

  if (portfolio.remainingAllocation < Number(amount)) {
    return {
      success: false,
      message: `You don't have sufficient funds to invest this amount - you have ${portfolio.remainingAllocation} left to invest`,
    };
  }
  return {
    success: true,
    message: "",
  };
};

const createInvestment = (
  amount: number,
  customerId: number,
  fund: Fund,
): Investment => {
  return {
    id: uuidv4(),
    customerId: customerId,
    fundId: fund.id,
    fundName: fund.name,
    amount: amount,
    dateCreated: new Date(),
  };
};

const updatePortfolio = (
  portfolio: Portfolio,
  newInvestment: Investment,
): Portfolio => {
  const investments = [...portfolio.investments, newInvestment];
  const totalInvested = investments.reduce((acc, investment) => {
    return acc + investment.amount;
  }, 0);
  const remainingAllocation =
    portfolio.remainingAllocation - newInvestment.amount;
  return {
    ...portfolio,
    investments: investments,
    totalInvested: totalInvested,
    remainingAllocation: remainingAllocation,
  };
};

const useInvestmentStore = create<InvestmentStore>()((set, get) => ({
  investableFunds: [],
  selectedFund: null,
  portfolio: {
    customerId: 0,
    investments: [],
    totalInvested: 0,
    remainingAllocation: 20000,
  },
  customer: {
    id: 123,
    name: "Bob Smith",
  },
  selectFund: (fund) => {
    set((state) => ({
      ...state,
      selectedFund: fund,
    }));
  },
  unSelectFund: () => {
    set(() => ({
      selectedFund: null,
    }));
  },
  addInvestment: (fund, amount) => {
    const portfolio = get().portfolio;
    const customerId = get().portfolio.customerId;
    const response = validateInvestment(amount, portfolio);
    if (!response.success) {
      return response;
    }
    const newInvestment = createInvestment(amount, customerId, fund);

    const updatedPortfolio = updatePortfolio(portfolio, newInvestment);
    set((state) => ({
      ...state,
      portfolio: updatedPortfolio,
    }));

    return response;
  },
}));

export default useInvestmentStore;

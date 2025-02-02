import { useState } from "react";
import useInvestmentStore from "../store/investment-store";

const FundDetails = () => {
  const { selectedFund, unSelectFund, addInvestment } = useInvestmentStore();

  const [investmentAmount, setInvestmentAmount] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  if (!selectedFund) {
    return;
  }

  const handleBackButtonClick = () => {
    setErrorMessage("");
    setInvestmentAmount("");
    unSelectFund();
  };

  const handleAmountInput = (amount: string) => {
    setInvestmentAmount(amount);
  };

  const handleCreateInvestment = () => {
    const response = addInvestment(selectedFund, parseInt(investmentAmount));
    if (!response.success) {
      setErrorMessage(response.message);
      return;
    }
    setInvestmentAmount("");
    unSelectFund();
  };

  return (
    <>
      <div className="border-1 border-secondary rounded-md w-5/6 m-auto p-4 mt-2">
        <h2 className="text-2xl underline p-4"> {selectedFund?.name}</h2>
        <p className="text-lg">
          Here's what you need to know about this fund before investing:
        </p>
        <p className="text-sm m-2">{selectedFund.description}</p>
        <div className="m-2">
          <h3 className="font-bold text-lg">
            How much would you like to invest?
          </h3>
          <p className="py-2">
            NB: The maximum amount you can deposit into an ISA is £20,000 per tax year
          </p>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={investmentAmount}
            onChange={(e) => handleAmountInput(e.target.value)}
          />
        </div>

        <p className="text-md text-orange-700">{errorMessage}</p>

        <div className="flex flex-row justify-between mt-2">
          <button
            className="btn btn-neutral flex-none"
            onClick={handleBackButtonClick}
          >
            Back
          </button>
          <button
            className="btn btn-secondary flex-none"
            onClick={handleCreateInvestment}
          >
            Invest
          </button>
        </div>
      </div>
    </>
  );
};

export default FundDetails;

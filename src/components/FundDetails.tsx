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
      <div>
        <h1>Details: {selectedFund?.name}</h1>
        <p>{selectedFund.description}</p>
        <div>
          <h3 className="font-bold text-lg">How much do you want to invest?</h3>
          <p className="py-4">
            NB: The maximum amount you can deposit is £20,000 per tax year
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
        <strong>{errorMessage}</strong>
        <button className="btn btn-neutral" onClick={handleBackButtonClick}>
          Back
        </button>
        <button className="btn btn-secondary" onClick={handleCreateInvestment}>
          Invest
        </button>
      </div>
    </>
  );
};

export default FundDetails;

import { useState } from "react";
import { Fund } from "../types/types";


interface FundDetailsProps {
  fund: Fund;
  toggleShowFundDetails: () => void;
}

const FundDetails = ({ fund, toggleShowFundDetails }: FundDetailsProps) => {
  const [showAmountInput, setShowAmountInput] = useState(false);

  const toggleShowAmountInput = () => {
    setShowAmountInput(!showAmountInput);
  };
  return (
    <>
      <div>
        <h1>Details: {fund.name}</h1>
        <p>{fund.description}</p>
        <button
          className="btn btn-neutral"
          onClick={() => toggleShowFundDetails()}
        >
          Back
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => toggleShowAmountInput()}
        >
          Select
        </button>
      </div>
    </>
  );
};

export default FundDetails;

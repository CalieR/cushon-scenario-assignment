import { useState } from "react";
import { Fund, Investment } from "../types/types";

interface InvestmentAmountProps {
  fund: Fund;
}

const InvestmentAmount = ({ fund }: InvestmentAmountProps) => {
  const [investmentAmount, setInvestmentAmount] = useState<string>("");

  const handleAmountInput = (amount: string) => {
    setInvestmentAmount(amount);
  };

  const handleAmountSubmit = () => {
    if (Number(investmentAmount) > 20000) {
        alert("You can only invest up to £20,000 per tax year, please change the amount and try again");
        return;
    } else {
        const investment: Investment = {
            id: 1,
            customerId: 1,
            fundId: fund.id,
            fundName: fund.name,
            amount: Number(investmentAmount),
            dateCreated: new Date(),
        };
        console.log(investment);
        const modal = document.getElementById(
            "my_modal_1",
          ) as HTMLDialogElement;
        modal.close();
    };
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box text-base-content">
        <h3 className="font-bold text-lg">
          How much do you want to invest in {fund.name}?
        </h3>
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
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-neutral">Go back</button>
          </form>
          <button
          type="submit"
            className="btn btn-secondary"
            onClick={() => handleAmountSubmit()}
          >
            Invest
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default InvestmentAmount;

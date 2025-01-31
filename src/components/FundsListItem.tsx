import { Fund } from "../types/types";
import InvestmentAmount from "./InvestmentAmount";

interface FundsListItemProps {
  fund: Fund;
}
const FundsListItem = ({ fund }: FundsListItemProps) => {
  return (
    <>
      <div className="card card-border border-secondary w-96 m-2">
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-2">{fund.name}</h2>
          <p className="card-text">{fund.description}</p>
          <div className="card-actions justify-end">
            <button
              className="btn"
              onClick={() => {
                const modal = document.getElementById(
                  "my_modal_1",
                ) as HTMLDialogElement;
                if (modal) {
                  modal.showModal();
                }
              }}
            >
              Select This Fund
            </button>
          </div>
        </div>
      </div>
      <InvestmentAmount fund={fund} />
    </>
  );
};

export default FundsListItem;

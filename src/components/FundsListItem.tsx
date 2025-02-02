import { Fund } from "../types/types";
import useInvestmentStore from "../store/investment-store";

interface FundsListItemProps {
  fund: Fund;
}
const FundsListItem = ({ fund }: FundsListItemProps) => {
  const { selectFund } = useInvestmentStore();

  return (
    <div className="mx-auto">
      <div className="card card-border border-secondary w-96 m-2">
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-2">{fund.name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-secondary" onClick={() => selectFund(fund)}>
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundsListItem;

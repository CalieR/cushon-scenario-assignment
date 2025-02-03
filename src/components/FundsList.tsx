import { useEffect } from "react";
import { getFunds } from "../api/funds-api";
import FundsListItem from "./FundsListItem";
import useInvestmentStore from "../store/investment-store";

const FundsList = () => {
  const { investableFunds, setInvestableFunds, selectedFund } =
    useInvestmentStore();

  //  I think the app store should actually assume responsibility for fetching the funds and handling loading / error / success states.
  useEffect(() => {
    const fetchFunds = async () => {
      const funds = await getFunds();
      setInvestableFunds(funds);
    };

    fetchFunds();
  }, []);

  if (selectedFund) {
    return;
  }

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap mt-4">
      {investableFunds.length > 0 ? (
        investableFunds.map((fund) => (
          <FundsListItem key={fund.id} fund={fund} />
        ))
      ) : (
        <p  className="mx-auto"><span className="loading loading-spinner loading-xs"></span> Loading funds...</p>
      )}
    </div>
  );
};

export default FundsList;

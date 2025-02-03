import { useEffect } from "react";
import { getFunds } from "../api/funds-api";
import FundsListItem from "./FundsListItem";
import useInvestmentStore from "../store/investment-store";

const FundsList = () => {
  const { investableFunds, setInvestableFunds, selectedFund } =
    useInvestmentStore();

  const fetchFunds = async () => {
    const funds = await getFunds();
    setInvestableFunds(funds);
  };

  useEffect(() => {
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
        <p>No funds found</p>
      )}
    </div>
  );
};

export default FundsList;

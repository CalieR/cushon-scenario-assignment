import { useEffect, useState } from "react";
import { getFunds } from "../api/funds-api";
import { Fund } from "../types/types";
import FundsListItem from "./FundsListItem";
import useInvestmentStore from "../store/investment-store";

const FundsList = () => {
  const { selectedFund } = useInvestmentStore();

  const [funds, setFunds] = useState<Fund[]>([]);

  const fetchFunds = async () => {
    const funds = await getFunds();
    setFunds(funds);
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  if (selectedFund) {
    return;
  }

  return (
    <div>
      {funds.length > 0 ? (
        funds.map((fund) => <FundsListItem key={fund.id} fund={fund} />)
      ) : (
        <p>No funds found</p>
      )}
    </div>
  );
};

export default FundsList;

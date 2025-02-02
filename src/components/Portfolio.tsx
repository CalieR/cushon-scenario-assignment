import useInvestmentStore from "../store/investment-store";
import { getInvestmentsByCustomerId } from "../api/investment-api";

const Portfolio = () => {
  const { portfolio } = useInvestmentStore();
  const customerProfile = getInvestmentsByCustomerId(portfolio.customerId);

  if (!customerProfile) {
    return (
      <div className="border-1 rounded-md w-5/6 mx-auto">
        <h1>Cushon ISA - Portfolio</h1>
        <p>No investments made</p>
      </div>
    );
  }

  return (
    <div className="border-1 rounded-md w-5/6 mx-auto">
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="col-span-2">
          <h1 className="text-xl">Cushon ISA - Portfolio</h1>
        </div>
        <div className="col-span-1 border-2 rounded-md border-gray-300">
          <p>Total Invested: £{customerProfile.totalInvested}</p>
          <p>Remaining Allocation: £{customerProfile.remainingAllocation}</p>
        </div>
      </div>
      <div>
        {customerProfile.investments.map((investment) => (
          <div key={investment.id} className="my-2">
            <p>
              <strong>Fund:</strong> {investment.fundName}{" "}
              <strong>Amount:</strong> £{investment.amount}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;

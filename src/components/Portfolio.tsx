import useInvestmentStore from "../store/investment-store";

const Portfolio = () => {
  const { portfolio } = useInvestmentStore();

  if (portfolio.investments.length === 0) {
    return (
      <div>
        <h1>Portfolio</h1>
        <p>No investments made</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Portfolio</h1>
      {portfolio.investments.map((investment) => (
        <p key={investment.id}>
          {investment.id} - {investment.fundName} - {investment.amount}
        </p>
      ))}
      <p>Total Invested: {portfolio.totalInvested}</p>
      <p>Remaining Allocation: {portfolio.remainingAllocation}</p>
    </div>
  );
};
export default Portfolio;

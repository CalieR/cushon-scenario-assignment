import useInvestmentStore from "../store/investment-store";

const Header = () => {
  const { customer } = useInvestmentStore();
  return (
    <div
      className="navbar bg-secondary text-primary-content"
      data-testid="header-component"
    >
      <div className="flex-1 text-left">
        <h2 className="font-bold">NatWest Cushon</h2>
      </div>
      <div className="flex-1 text-right">
        <h3 data-testid="customer-name">{customer.name}</h3>
      </div>
    </div>
  );
};

export default Header;

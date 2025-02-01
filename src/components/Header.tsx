import useInvestmentStore from "../store/investment-store";

const Header = () => {
  const { customer } = useInvestmentStore();
  return (
    <div className="navbar bg-secondary text-primary-content">
      <div className="flex-1 text-left">
        <h2 className="font-bold">NatWest Cushon</h2>
      </div>
      <div className="flex-1 text-right">
        <h3>{customer.name}</h3>
      </div>
    </div>
  );
};

export default Header;

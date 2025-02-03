import FundDetails from "./FundDetails";
import FundsList from "./FundsList";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div>
      <Portfolio />
      <FundsList />
      <FundDetails />
    </div>
  );
};

export default Home;

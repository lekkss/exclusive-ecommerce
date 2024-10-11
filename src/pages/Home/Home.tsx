import Todays from "./Todays";
import BestSeller from "./BestSeller";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto pt-28 px-5">
        <Todays />
        <Categories />
        <BestSeller />
      </div>
    </div>
  );
};

export default Home;

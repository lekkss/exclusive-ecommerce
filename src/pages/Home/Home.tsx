import Todays from "./Todays";
import BestSeller from "./BestSeller";
import Categories from "./Categories";
import { Hero } from "./Hero";
import Products from "./Products";
import HeroTwo from "./HeroTwo";
import Services from "./Services";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto pb-10 px-5">
        <Hero />
        <Todays />
        <Categories />
        <BestSeller />
        <HeroTwo />
        <Products />
        <Services />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;

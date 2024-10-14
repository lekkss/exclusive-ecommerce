import Breadcrumb from "../../components/BreadCrumb";
import Services from "../Home/Services";
import Employee from "./Employee";
import Hero from "./Hero";
import Statistics from "./Statistics";

const About = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About" }];

  return (
    <div>
      <div className="container mx-auto py-28 px-5">
        <Breadcrumb items={breadcrumbItems} />
        <Hero />
        <Statistics />
        <Employee />
        <Services />
      </div>
    </div>
  );
};

export default About;

import Breadcrumb from "../../components/BreadCrumb";

const About = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About" }];

  return (
    <div>
      <div className="container mx-auto py-28 px-5">
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  );
};

export default About;

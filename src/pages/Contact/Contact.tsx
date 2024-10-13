import Breadcrumb from "../../components/BreadCrumb";
import Call from "./Call";
import ContactForm from "./ContactForm";

const Contact = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <div>
      <div className="container mx-auto py-28 px-5">
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid md:grid-cols-5 gap-7 pt-20">
          <Call />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

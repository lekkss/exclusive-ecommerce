import ServiceCard from "../../components/ServiceCard";
import fast from "../../assets/services/icon-delivery.svg";
import service from "../../assets/services/Icon-Customer service.svg";
import secure from "../../assets/services/Icon-secure.svg";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ServiceCard
        icon={fast}
        heading="FREE AND FAST DELIVERY"
        subheading="Free delivery for all orders over $140"
      />
      <ServiceCard
        icon={service}
        heading="24/7 CUSTOMER SERVICE"
        subheading="Friendly 24/7 customer support"
      />
      <ServiceCard
        icon={secure}
        heading="MONEY BACK GUARANTEE"
        subheading="We reurn money within 30 days"
      />
    </div>
  );
};

export default Services;

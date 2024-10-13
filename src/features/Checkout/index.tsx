import Breadcrumb from "../../components/BreadCrumb";

const CheckoutPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
    { label: "Checkout" },
  ];

  return (
    <div>
      <div className="container mx-auto py-28 px-5">
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  );
};

export default CheckoutPage;

import { useNavigate } from "react-router-dom";
import Text from "../components/Text";
import Button from "../components/Button";
import Breadcrumb from "../components/BreadCrumb";

const NotFound = () => {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "404 Error" },
  ];

  return (
    <div className="flex flex-col py-20 px-5 container mx-auto">
      <Breadcrumb items={breadcrumbItems} />
      <div className="min-h-[calc(100vh-30vh)] justify-center flex flex-col gap-20 items-center text-black">
        <Text
          className="text-[60px] md:text-[110px] leading-[100px] text-center"
          color="black"
        >
          404 Not Found
        </Text>
        <Text weight="light" size="base" color="black" className="text-center">
          Your visited page not found. You may go home page.
        </Text>
        <Button text="Back to home page" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default NotFound;

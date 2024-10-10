import { useNavigate } from "react-router-dom";
import Text from "../components/Text";
import Button from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col py-20">
      <div className="min-h-[calc(100vh-30vh)] justify-center flex flex-col gap-20 items-center text-black">
        <Text
          className="text-[110px] leading-[100px] text-center"
          color="black"
        >
          404 Not Found
        </Text>
        <Text weight="light" size="base" color="black">
          Your visited page not found. You may go home page.
        </Text>
        <Button text="Back to home page" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default NotFound;

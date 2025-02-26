import jbl from "../../assets/jbl.png";
import Button from "../../components/Button";
import CountdownTimer from "../../components/CountDownTimer";
import Text from "../../components/Text";
const HeroTwo = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-black p-6 md:p-16 md:px-20">
        <div className="flex gap-10 flex-col w-full md:w-fit">
          <Text
            size="base"
            weight="semibold"
            color="success"
            className="text-green"
          >
            Categories
          </Text>
          <Text className="text-4xl font-semibold md:text-[50px] md:leading-[60px]">
            Enhance Your <br /> Music Experience
          </Text>
          <CountdownTimer circular endDate="2025-04-15T23:59:59Z" />
          <Button text="Buy Now!" color="green" className="bg-green" />
        </div>
        <div className="hidden md:block">
          <img className="w-[700px]" src={jbl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;

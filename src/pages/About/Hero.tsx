import Text from "../../components/Text";
import sideimage from "../../assets/sideimage.png";

const Hero = () => {
  return (
    <div className="py-16 pb-20 grid md:grid-cols-2 gap-8 place-items-center">
      <div className="flex flex-col gap-8">
        <Text color="black" className="text-6xl">
          Our Story
        </Text>
        <Text color="black">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
          <br />
          <br />
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </Text>
      </div>
      <div>
        <img src={sideimage} alt="" />
      </div>
    </div>
  );
};

export default Hero;

import { Icon } from "@iconify/react";
import Text from "../components/Text";
const Footer = () => {
  const quickLink = [
    { name: "Privacy Policy", link: "" },
    { name: "Terms of Use", link: "" },
    { name: "FAQ", link: "" },
    { name: "Contact", link: "" },
  ];
  return (
    <div className="bg-black">
      <div className="container mx-auto text-text pt-20 pb-10 px-5">
        <div className="flex flex-col gap-20">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <Text size="2xl" weight="bold">
                Exclusive
              </Text>
              <Text size="lg" weight="semibold">
                Subscribe
              </Text>
              <Text size="base">Get 10% off your first order</Text>
              <div className="flex items-center justify-between w-full border border-white p-3 rounded">
                <input
                  type="text"
                  className="text-grey border-none bg-transparent outline-none"
                  placeholder="Enter your email"
                />
                <Icon icon="akar-icons:send" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <Text size="lg" weight="semibold">
                Support
              </Text>
            </div>
            <div className="flex flex-col">
              <Text size="lg" weight="semibold">
                Account
              </Text>
            </div>{" "}
            <div className="flex flex-col">
              <Text size="lg" weight="semibold">
                Quick Link
              </Text>
              <div className="flex flex-col gap-4 pt-10">
                {quickLink.map((item) => (
                  <Text size="base" key={item.name}>
                    {item.name}
                  </Text>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <Text size="lg" weight="semibold">
                Download App
              </Text>
            </div>
          </div>
          {/* Copyright */}
          <div className="">C</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

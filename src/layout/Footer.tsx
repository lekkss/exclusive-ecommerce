import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import Text from "../components/Text";
import qr from "../assets/qr.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import InputButton from "../components/InputButton";
const Footer = () => {
  const quickLink = [
    { name: "Privacy Policy", link: "" },
    { name: "Terms of Use", link: "" },
    { name: "FAQ", link: "" },
    { name: "Contact", link: "" },
  ];

  const account = [
    { name: "My Account", link: "" },
    { name: "Login / Rregister", link: "signup" },
    { name: "Cart", link: "" },
    { name: "Wishlist", link: "" },
    { name: "Shop", link: "" },
  ];

  const supportLink = [
    { name: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.", link: "" },
    { name: "exclusive@gmail.com", link: "" },
    { name: "+88015-88888-9999", link: "" },
  ];
  return (
    <div className="bg-black">
      <div className="container mx-auto pt-20 pb-10 px-5 text-grey ">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            <div className="flex flex-col gap-4">
              <Text size="2xl" weight="bold">
                Exclusive
              </Text>
              <Text size="lg" weight="semibold">
                Subscribe
              </Text>
              <Text size="base">Get 10% off your first order</Text>
              <InputButton placeholder="Enter your email" />
            </div>
            <div className="flex flex-col md:w-1/6">
              <Text size="lg" weight="semibold">
                Support
              </Text>
              <div className="flex flex-col gap-4 pt-5 md:pt-10">
                {supportLink.map((item) => (
                  <NavLink to={item.link} key={item.name}>
                    <Text size="base">{item.name}</Text>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <Text size="lg" weight="semibold">
                Account
              </Text>
              <div className="flex flex-col gap-4 pt-5 md:pt-10">
                {account.map((item) => (
                  <NavLink to={item.link} key={item.name}>
                    <Text size="base">{item.name}</Text>
                  </NavLink>
                ))}
              </div>
            </div>{" "}
            <div className="flex flex-col">
              <Text size="lg" weight="semibold">
                Quick Link
              </Text>
              <div className="flex flex-col gap-4 pt-5 md:pt-10">
                {quickLink.map((item) => (
                  <NavLink to={item.link} key={item.name}>
                    <Text size="base">{item.name}</Text>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <Text size="lg" weight="semibold">
                Download App
              </Text>
              <div className="flex flex-col gap-4 pt-5 md:pt-10">
                <Text size="sm" weight="normal" color="grey">
                  Save $3 with App New User Only
                </Text>
                <div className="flex gap-3">
                  <img src={qr} alt="" />
                  <div className="flex flex-col gap-3">
                    <img src={google} alt="" />
                    <img src={apple} alt="" />
                  </div>
                </div>
                <div className="flex gap-5">
                  <Icon icon="ri:facebook-line" className="w-8 h-8" />
                  <Icon icon="hugeicons:twitter" className="w-8 h-8" />
                  <Icon icon="hugeicons:instagram" className="w-8 h-8" />
                  <Icon icon="ri:linkedin-line" className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="flex items-center gap-3 justify-center">
            <Icon icon="ic:outline-copyright" className="w-6 h-6" />
            <Text size="base" weight="normal" color="grey">
              Copyright Rimel 2022. All right reserved
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react"; // Ensure you have this installed if you want to use icons

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center "
      >
        <Icon icon="mdi:arrow-up" className="text-black w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollToTop;

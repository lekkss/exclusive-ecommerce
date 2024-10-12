import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Text from "../components/Text";
import InputButton from "../components/InputButton";
import { Icon } from "@iconify/react";
import IconBadge from "../components/IconBadge";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Header = () => {
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const wishlistItemsCount = useSelector(
    (state: RootState) => state.wishlist.items.length
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLink = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "contact",
      link: "/contact",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "sign up",
      link: "/signup",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 w-full items-center z-10 border-b">
        {/* Top Bar with Sale Text */}
        <div className="bg-black">
          <div className="container mx-auto flex flex-col items-center p-3">
            <Text size="xs" className="text-sm text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </Text>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="flex items-center justify-between p-2 pt-7">
              {/* Logo */}
              <Link to="/">
                <Text weight="bold" size="xl" color="black">
                  EXCLUSIVE
                </Text>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-10">
                {navLink.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    className={({ isActive }: { isActive: boolean }) =>
                      `text-black capitalize font-normal ${
                        isActive ? "border-b-2 border-grey" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Search and Icons */}
              <div className="flex items-center gap-6">
                <InputButton
                  className="hidden lg:flex bg-[#F5F5F5] gap-2"
                  placeholder="What are you looking for?"
                  icon="mynaui:search"
                />

                <IconBadge
                  icon="ic:round-favorite-border"
                  count={wishlistItemsCount}
                />
                <IconBadge
                  icon="ic:outline-shopping-cart"
                  count={cartItemsCount}
                />

                {/* Mobile Menu Toggle (Hamburger) */}
                <div className="lg:hidden">
                  <Icon
                    icon={isMobileMenuOpen ? "ic:round-close" : "ic:round-menu"}
                    className="w-8 h-8 cursor-pointer text-black"
                    onClick={toggleMobileMenu}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="flex flex-col items-center gap-4 p-4">
                {navLink.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    className={({ isActive }: { isActive: boolean }) =>
                      `text-black capitalize font-normal w-full text-center ${
                        isActive ? "border-b-2 border-grey" : ""
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="p-2">
                <InputButton
                  className="bg-[#F5F5F5] gap-2"
                  placeholder="What are you looking for?"
                  icon="mynaui:search"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Page Content */}
      <div className="pt-28">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Header;

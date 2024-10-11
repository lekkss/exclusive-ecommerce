import havit from "../assets/products/havit-game-pad.png";
import monitor from "../assets/products/ips-lcd-monitor.png";
import keyboard from "../assets/products/ak-900-keyboard.png";
import chair from "../assets/products/s-series-chair.png";
import laptop from "../assets/products/asus-laptop.png";

import north from "../assets/products/north-coat.png";
import bag from "../assets/products/gucci-duffle-bag.png";
import speaker from "../assets/products/rgb-liquid-cpu-cooler.png";
import shelf from "../assets/products/small-bookshelf.png";
import { Product } from "../components/types";
export const flashSales: Product[] = [
  {
    id: 12324,
    name: "HAVIT HV-G92 Gamepad",
    image: havit,
    rating: 5,
    noUserRatings: 88,
    discount: 40,
    tag: "discount",
    category: 6,
    discountType: "percent",
    price: 160,
  },
  {
    id: 296943,
    name: "AK-900 Wired Keyboard",
    image: keyboard,
    rating: 4,
    noUserRatings: 75,
    tag: "discount",
    discount: 35,
    category: 2,
    discountType: "percent",
    price: 1160,
  },
  {
    id: 356069,
    name: "IPS LCD Gaming Monitor",
    image: monitor,
    rating: 5,
    tag: "discount",
    noUserRatings: 99,
    discount: 30,
    category: 6,
    discountType: "percent",
    price: 400,
  },
  {
    id: 5485439,
    name: "S-Series Comfort Chair ",
    image: chair,
    rating: 4.5,
    tag: "discount",
    noUserRatings: 99,
    discount: 25,
    category: 2,
    discountType: "percent",
    price: 400,
  },
  {
    id: 54654,
    name: "ASUS FHD Gaming Laptop",
    image: laptop,
    rating: 5,
    tag: "discount",
    noUserRatings: 65,
    discount: 35,
    category: 2,
    discountType: "percent",
    price: 1160,
  },
];

export const bestSeller: Product[] = [
  {
    id: 1433434,
    name: "The north coat",
    image: north,
    rating: 5,
    noUserRatings: 65,
    discount: 100,
    tag: "discount",
    category: 7,
    discountType: "fixed",
    price: 360,
  },
  {
    id: 21321,
    name: "Gucci duffle bag",
    image: bag,
    rating: 4.5,
    noUserRatings: 65,
    discount: 200,
    tag: "discount",
    category: 7,
    discountType: "fixed",
    price: 1160,
  },
  {
    id: 333333,
    name: "RGB liquid CPU Cooler",
    image: speaker,
    rating: 4.5,
    noUserRatings: 40,
    discount: 10,
    tag: "discount",
    category: 2,
    discountType: "fixed",
    price: 170,
  },
  {
    id: 423423,
    name: "Small BookSelf",
    image: shelf,
    rating: 4.5,
    noUserRatings: 40,
    discount: 0,
    tag: null,
    category: 2,
    discountType: null,
    price: 360,
  },
];

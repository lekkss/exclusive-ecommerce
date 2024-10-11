export interface Product {
  id: number;
  name: string;
  image: string; // Assuming `havit` is a string representing an image URL or import path
  rating: number;
  noUserRatings: number;
  discount: number;
  tag: "discount" | "new" | "limited" | null; // Assuming possible values for tag
  category: number; // Assuming this is a category ID
  discountType: "percent" | "fixed" | null; // Defining discount type (percent or fixed value)
  price: number;
}

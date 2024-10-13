import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/BreadCrumb";
import {
  selectCartItems,
  increaseQuantity,
  decreaseQuantity,
  // removeFromCart,
  selectCartTotalAmount,
} from "./cartSlice";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Cart" }];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const shipping = 5; // You can adjust or calculate shipping cost as needed
  const total = totalAmount + shipping;

  const handleQuantityChange = (id: number, type: "increase" | "decrease") => {
    if (type === "increase") {
      dispatch(increaseQuantity({ id }));
    } else {
      dispatch(decreaseQuantity({ id }));
    }
  };

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleRemoveFromCart = (id: number) => {
  //   dispatch(removeFromCart({ id }));
  // };

  return (
    <div>
      <div className="container mx-auto py-28 px-5">
        <Breadcrumb items={breadcrumbItems} />
        <div className="">
          <div className="overflow-x-auto w-full">
            <table className="min-w-full text-left table-auto border-none mt-20">
              <thead>
                <tr className="rounded shadow text-left border">
                  <th className="p-4 font-normal">Product</th>
                  <th className="p-4 font-normal">Price</th>
                  <th className="p-4 font-normal">Quantity</th>
                  <th className="p-4 font-normal">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white shadow rounded my-4 border"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-11 h-11 object-cover rounded-md"
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "decrease")
                          }
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          readOnly
                          className="w-12 py-2 px-2 outline-none border rounded"
                        />
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "increase")
                          }
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-10 gap-5">
            <Button
              text="Return To Shop"
              color="white"
              textColor="black"
              className="border border-black"
              onClick={() => navigate("/")}
            />
            <Button
              text="Update Cart"
              color="white"
              textColor="black"
              className="border border-black"
            />
          </div>
          <div className="flex flex-col md:flex-row items-start justify-between pt-10 gap-5 ">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="outline-none border-black border rounded px-2"
              />
              <Button text="Apply Coupon" fullWidth />
            </div>
            <div className="mt-6  p-3 md:p-7 rounded border border-black w-full md:w-[30%]">
              <Text color="black" size="lg">
                Cart Total
              </Text>

              <div className="flex justify-between items-center my-4 border-b py-2">
                <Text color="black" size="base">
                  Subtotal:
                </Text>
                <Text color="black" size="base">
                  ${total.toFixed(2)}
                </Text>
              </div>
              <div className="flex justify-between items-center mb-4 border-b py-2">
                <Text color="black" size="base">
                  Shipping:
                </Text>
                <Text color="black" size="base">
                  ${shipping.toFixed(2)}
                </Text>
              </div>
              <div className="flex justify-between items-center mb-6 border-b py-2">
                <Text color="black" size="base">
                  Total:
                </Text>
                <Text color="black" size="base">
                  ${total.toFixed(2)}
                </Text>
              </div>
              <Button
                text="Proceed to Checkout"
                fullWidth
                onClick={() => navigate("/checkout")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

import phome from "../../assets/dl.beatsnoop.png";
import Button from "../../components/Button";
import Text from "../../components/Text";
const Login = () => {
  return (
    <div className="">
      <div className="flex md:py-20">
        <div className="hidden md:block md:w-1/2 lg:w-2/3 bg-[#CBE4E8]">
          <img src={phome} alt="" />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center">
          <div className="flex flex-col gap-6 w-full px-4 md:px-20 py-10">
            <Text size="2xl" weight="normal" color="black">
              Log in to Exclusive
            </Text>
            <Text color="black" size="base" weight="light">
              Enter your details below
            </Text>
            <div className="flex flex-col gap-10">
              <input
                type="email"
                className="border-b bg-transparent border-b-grey text-grey font-light"
                placeholder="Email"
              />{" "}
              <input
                type="password"
                className="border-b bg-transparent border-b-grey text-grey font-light"
                placeholder="Password"
              />
              <div className="flex items-center justify-between">
                <Button padding="lg" text="Log in" />
                <Text
                  size="base"
                  weight="light"
                  color="primary"
                  className="text-center"
                >
                  <a href="/">Forgot Password?</a>
                </Text>
              </div>
              <Text
                size="base"
                weight="light"
                color="black"
                className="text-center"
              >
                <div>
                  Don't have an account?{" "}
                  <span className="underline">
                    <a href="/signup">Signup</a>
                  </span>
                </div>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { Icon } from "@iconify/react";
import Text from "../../components/Text";

const Call = () => {
  return (
    <div className="flex flex-col p-4 rounded shadow-md">
      <div className="flex flex-col gap-5 p-3">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-pry flex items-center justify-center">
            <Icon icon="bx:phone" className="w-6 h-6 text-white" />
          </div>
          <Text size="base" color="black">
            Call To Us
          </Text>
        </div>
        <Text size="sm" color="black">
          We are available 24/7, 7 days a week.
        </Text>
        <Text size="sm" color="black">
          Phone: +8801611112222
        </Text>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col gap-5 p-3">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-pry flex items-center justify-center">
            <Icon icon="iconamoon:email-light" className="w-6 h-6 text-white" />
          </div>
          <Text size="base" color="black">
            Write To Us
          </Text>
        </div>
        <Text size="sm" color="black">
          Fill out our form and we will contact you within 24 hours.
        </Text>
        <Text size="sm" color="black">
          Emails: customer@exclusive.com
        </Text>
        <Text size="sm" color="black">
          Emails: support@exclusive.com
        </Text>
      </div>
    </div>
  );
};

export default Call;

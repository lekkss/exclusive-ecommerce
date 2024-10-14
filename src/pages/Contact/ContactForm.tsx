import Button from "../../components/Button";
import InputField from "../../components/form/InputField";
import TextAreaField from "../../components/form/TextAreaField";

const ContactForm = () => {
  return (
    <div className="p-4 md:p-8 rounded md:col-span-4 shadow-md">
      <div className="w-full">
        <form className="flex flex-col gap-4 md:gap-8">
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <InputField
              onChange={() => {}}
              value=""
              placeholder="Your Name"
              type="text"
            />
            <InputField
              onChange={() => {}}
              value=""
              placeholder="Your Email"
              type="email"
            />
            <InputField
              onChange={() => {}}
              value=""
              placeholder="Your Phone"
              type="text"
            />
          </div>
          <TextAreaField
            onChange={() => {}}
            value=""
            placeholder="Your Message"
            row={7}
          />
          <div className="flex justify-end">
            <Button text="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

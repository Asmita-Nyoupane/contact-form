import React from "react";
import Input from "./input";
import TextArea from "./text-area";
import { Mail, MessageCircle, UserRound } from "lucide-react";
const formContainer = {
  sm: " p-10 gap-6",
  md: " p-12 gap-8",
  lg: "p-20 gap-10 ",
};
const Form = ({ size, formClass }) => {
  return (
    <form
      className={` flex flex-col  border  shadow rounded  ${formContainer[size]}  ${formClass}`}
    >
      <Input
        label={"Name"}
        type="text"
        placeholder={"Enter your name"}
        icon={UserRound}
        size={size}
      />
      <Input
        label={"Email"}
        type="text"
        placeholder={"Enter your email"}
        icon={Mail}
        size={size}
      />
      <TextArea
        label="Message"
        placeholder={"Write short message..."}
        icon={MessageCircle}
        size={size}
      />
    </form>
  );
};

export default Form;

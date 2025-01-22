import React from "react";
import Input from "./input";
import TextArea from "./text-area";
import { Mail, MessageCircle, UserRound } from "lucide-react";

const Form = ({ size }) => {
  return (
    <form className={` form-container ${size}`}>
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
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

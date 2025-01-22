import React from "react";
import Input from "./input";
import TextArea from "./text-area";
import { Mail, MessageCircle, UserRound } from "lucide-react";

const Form = () => {
  return (
    <form className="form-container">
      <Input
        label={"Name"}
        type="text"
        placeholder={"Enter your name"}
        icon={UserRound}
      />
      <Input
        label={"Email"}
        type="text"
        placeholder={"Enter your email"}
        icon={Mail}
      />
      <TextArea
        label="Message"
        placeholder={"Write short message..."}
        icon={MessageCircle}
      />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

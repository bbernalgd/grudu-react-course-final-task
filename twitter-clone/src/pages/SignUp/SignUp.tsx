import React from "react";
import { FormContainer } from "../../components/formContainer/FormContainer";
import { SignUpForm } from "../../components/forms";

export const SignUp = () => {
  return (
    <FormContainer title={"Join Twitter today"}>
      <SignUpForm />
    </FormContainer>
  );
};

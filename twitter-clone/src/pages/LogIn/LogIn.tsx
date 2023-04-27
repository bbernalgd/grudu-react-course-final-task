import React from "react";
import { FormContainer } from "../../components/formContainer/FormContainer";
import { LogInForm } from "../../components/forms";

export const LogIn = () => {
  return (
    <FormContainer title={"Sign in to Twitter"}>
      <LogInForm />
    </FormContainer>
  );
};

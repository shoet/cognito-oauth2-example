import { Authenticator } from "@aws-amplify/ui-react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LoginForm = () => {
  const formFields = {
    signUp: {
      username: {
        // ここのフィールド名で紐づけている。usernameフィールドをemailフィールドとして使用する。
        label: "Email",
        placeholder: "Enter your Email",
        isRequired: true,
        order: 1,
      },
      name: {
        label: "Name",
        placeholder: "Enter your Username",
        isRequired: true,
        order: 2,
      },
      password: {
        label: "Password",
        placeholder: "Enter your Password",
        isRequired: true,
        order: 3,
      },
      confirm_password: {
        label: "Confirm Password",
        order: 4,
      },
    },
  };

  return (
    <Container>
      <Authenticator formFields={formFields} />
    </Container>
  );
};

import { Authenticator } from "@aws-amplify/ui-react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LoginForm = () => {
  return (
    <Container>
      <Authenticator />
    </Container>
  );
};

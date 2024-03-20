import { PropsWithChildren } from "react";
import styled from "styled-components";
import { Header } from "../../molecules/Header";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const BaseLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

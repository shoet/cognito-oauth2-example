import { Authenticator } from "@aws-amplify/ui-react";
import { PropsWithChildren } from "react";

export const AuthContextProvider = (props: PropsWithChildren) => {
  const { children } = props;

  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};

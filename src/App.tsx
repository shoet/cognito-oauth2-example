import { Amplify } from "aws-amplify";
import { BaseLayout } from "./components/layout/BaseLayout";
import { Config } from "./config";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

const ampConfig = {
  Auth: {
    Cognito: {
      userPoolId: Config.AWS_USER_POOL_ID,
      userPoolClientId: Config.AWS_USER_POOL_APP_CLIENT_ID,
      identityPoolId: Config.AWS_ID_POOL_ID,
      userAttributes: {
        name: {
          required: true,
        },
      },
    },
  },
};
Amplify.configure(ampConfig);

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

function App() {
  return (
    <>
      <Authenticator formFields={formFields}>
        <BaseLayout>
          <div>hoge</div>
        </BaseLayout>
      </Authenticator>
    </>
  );
}

export default App;

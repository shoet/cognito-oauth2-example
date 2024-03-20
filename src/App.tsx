import { Amplify } from "aws-amplify";
import { BaseLayout } from "./components/layout/BaseLayout";
import { Config } from "./config";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "aws-amplify/auth/enable-oauth-listener";
import { Outlet } from "react-router-dom";

Amplify.configure({
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
      loginWith: {
        oauth: {
          domain: Config.AWS_COGNITO_DOMAIN,
          scopes: ["email", "profile", "openid"],
          redirectSignIn: ["http://localhost:5174/home"],
          redirectSignOut: [
            "http://google.com", // Authenticator配下のコンポーネントだとエラーになるっぽいのでGoogleを設定する
            // "http://localhost:5174/logout", // エラーになる
          ],
          providers: ["Google"],
          responseType: "code",
        },
      },
    },
  },
});

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

export default withAuthenticator(App, {
  socialProviders: ["google"],
  formFields: formFields,
});

function App() {
  return (
    <>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </>
  );
}

// export default App;

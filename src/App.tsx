import { Amplify } from "aws-amplify";
import { BaseLayout } from "./components/layout/BaseLayout";
import { Config } from "./config";
import { AuthContextProvider } from "./context/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import "@aws-amplify/ui-react/styles.css";

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

function App() {
  return (
    <>
      <AuthContextProvider>
        <BaseLayout>
          <LoginPage />
        </BaseLayout>
      </AuthContextProvider>
    </>
  );
}

export default App;
